<?php

## blogs functions
## Corey Smaller


require_once ('class.Database.php');

class Blog {

    var $database;

    public function __construct() {

        $this->database = new Database();
    }

    function add_image($blog_id, $image_name, $tn_width, $tn_height){

        $today = getdate();


        $sql = "insert into blog_img SET
                    img_name = '$image_name',
                    thumbnail='/img/blog/thumbnail/".$image_name."',
                    width = $tn_width,
                    height=$tn_height,
                    blog_id = $blog_id"
        ;
        $this->database->execQuery($sql);
    }

    function add($post, $pic = null, $w=null, $h=null) {

        if (isset($post['saveForLater'])) {
            $isFinal = 0;
       } else {
           $isFinal = 1;
       }

        $today = getdate();
        $this->database->connect();
        $blog = mysqli_real_escape_string ( $this->database->linkDB, $post['blog'] );

        $sql = "insert into blog SET
                    title = '$post[title]',
                    blog = '$blog',
                    date=NOW(),
                    isFinal= $isFinal,
                    month = $today[mon],
                    year = $today[year]"
        ;
        $this->database->execQuery($sql);
    }
    function addView($id) {

       $sql = "update blog SET
                    views = views+1 where id = $id";

        $this->database->execQuery($sql);
    }



    function add_comment($post) {


        $sql = "insert into comment SET
                        comment = '$post[comment]',
                        name = '$post[name]',
                        email = '$post[email]',
                        blog_id = '$post[blog_id]',
                        date = NOW(),
                        timestamp = NOW()";

        $this->database->execQuery($sql);
    }

    function getBlog($id) {

        $sql = "SELECT  * FROM blog where id = $id
                          order by timestamp desc";// //count( comment.comment )  LEFT OUTER JOIN comment ON comment.blog_id = blog.id WHERE blog.id = $id

        $this->database->execQuery($sql);

        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        $imgAr = null;
        $sql = "select * from blog_img where blog_id=".$id;
        $this->database->execQuery($sql);

        while ($lst = mysqli_fetch_array($this->database->result)) {
          $lst['url'] = '/img/blog/'.$lst['img_name'];
            $imgAr[] = $lst;
        }
        $arrLog['images'] = $imgAr;
        return $arrLog;
    }

    function getArchiveCount() {



        $sql = "SELECT  month, count(MONTH) as month_count,year
                    FROM blog
                    GROUP BY CONCAT(month,year)
                    ORDER BY year,month";
        $this->database->execQuery($sql);

        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        return $arrLog;
    }

    function getBlogTitles($m, $y) {



        $sql = "SELECT  title,date,id
                    FROM blog
                    where month = $m and year = $y";

        $this->database->execQuery($sql);

        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        return $arrLog;
    }

    function updateBlog($post) {


        $sql = "UPDATE blog set 	email = '$post[email]'";
        $this->database->execQuery($sql);
    }

    function delete($id) {

        $sql = " DELETE from blog where id = '$id'";
        $this->database->execQuery($sql);
        $sql = "DELETE from comment where blog_id = '$id'";
        $this->database->execQuery($sql);
    }

    function delete_comment($id) {

        $sql = "DELETE from comment where id = '$id'";

        $this->database->execQuery($sql);
    }

    // strips slashes, and converts special characters to HTML equivalents

    function decode_entities($b) {
        // $text= html_entity_decode($text,ENT_QUOTES,"ISO-8859-1"); #NOTE: UTF-8 does not work!

        $b = preg_replace("/�/", "'", $b);
        $b = preg_replace('/�/', '"', $b);
        $b = preg_replace('/�/', '"', $b);
        return $b;
    }

    function getAll() {


        $sql = " SELECT blog. * , COUNT( comment.blog_id ) AS count
                            FROM blog
                            LEFT OUTER JOIN comment ON comment.blog_id = blog.id
                            GROUP BY  blog.timestamp desc
                            LIMIT 0 , 30  ";
        //Select blog.*, COUNT(comment.comment) as count
        //	from blog,comment
        //WHERE blog.id = comment.blog_id
        //order by date desc";
        $this->database->execQuery($sql);
        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $lst['blog'] = nl2br($lst['blog']);
            $arrLog[] = $lst;
        }
        return $arrLog;
    }

    function getAllLatest() {


        $sql = " SELECT blog. * , COUNT( comment.blog_id ) AS count
                            FROM blog
                            LEFT OUTER JOIN comment ON comment.blog_id = blog.id
                            WHERE blog.isFinal = 1
                            GROUP BY  blog.timestamp desc
                            LIMIT 1  ";
        //Select blog.*, COUNT(comment.comment) as count
        //  from blog,comment
        //WHERE blog.id = comment.blog_id
        //order by date desc";
        $this->database->execQuery($sql);
        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $lst['blog'] = nl2br($lst['blog']);
            $id = $lst['id'];
            $arrLog[] = $lst;
        }

        $imgAr = null;
        $sql = "select * from blog_img where blog_id=".$id;
        $this->database->execQuery($sql);

        while ($lst = mysqli_fetch_array($this->database->result)) {
          $lst['url'] = '/img/blog/'.$lst['img_name'];
            $imgAr[] = $lst;
        }
        $arrLog['images'] = $imgAr;
        return $arrLog;

        return $arrLog;
    }

    function get_blog($id) {



        $sql = "SELECT blog. * , count(comment.comment) as count
                            FROM blog
                            LEFT OUTER JOIN comment ON comment.blog_id = blog.id
                            where blog.id ='$id'
                            group by comment.blog_id";
        $this->database->execQuery($sql);
        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        return $arrLog;
    }

    function get_blog_edit($id) {


        print "GET".$id;;
        $sql = "Select *
                                    from blog
                                    where id= '$id'";
        $this->database->execQuery($sql);
        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        return $arrLog;
    }

    function get_comments($id) {


        $sql = "Select * from comment where blog_id  ='$id'";
        $this->database->execQuery($sql);
        $arrLog = NULL;

        while ($lst = mysqli_fetch_array($this->database->result)) {
            $arrLog[] = $lst;
        }

        return $arrLog;
    }

    function edit($post, $pic, $w, $h) {
        $this->database->connect();
        if (isset($post['saveForLater'])) {
            $isFinal = 0;
       } else {
           $isFinal = 1;
       }

       //$blog = $post['blog'];
        $blog = mysqli_real_escape_string ( $this->database->linkDB, $post['blog'] );

        $sql = "UPDATE blog set 	title = '$post[title]',
                            blog = '$blog',
                            isFinal = '$isFinal',
                            date = NOW()
                            WHERE id = '" . $post['id'] . "'
                    ";

        $this->database->execQuery($sql);
    }

}

?>
