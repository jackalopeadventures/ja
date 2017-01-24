<?php
include_once('includes/config.php');
include_once('includes/class.Blog.php');
include_once('includes/global_functions.php');

$blog = new Blog();
$body = 'views/blog/';

if(! isset($_REQUEST['action'])){
    $_REQUEST['action'] = null;
}





switch ($_REQUEST['action']) {

    case('add_images'):{

print 'adding image';
        $blog_id = $_POST['id'];

        if ($_FILES['files']) {
            $file_ary = reArrayFiles($_FILES['files']);

            foreach ($file_ary as $val) {
              print $val['name'];
            //  $info = getimagesize($val);
              $extension = getExtension($val['type']);

              //get the original name of the file from the clients machine
              $filename = stripslashes($val['name']);
              //get the extension of the file in a lower case format

             $extension = strtolower($extension);

                //if it is not a known extension, we will suppose it is an error and will not  upload the file,
                  //otherwise we will do more tests
                  if (($extension != ".jpg") && ($extension != ".jpeg") && ($extension != ".png") && ($extension != ".gif")) {
                    print "NOT EXTENSION";
                    die();

                      $_REQUEST['dsp'] = 'edit';
                      $_REQUEST['error'] = 1;
                      break;
                  } else {

                      $size = filesize($val['tmp_name']);

                      $max_width = 300;
                      $max_height = 400;
                      //FIGURE OUT THE RATIO W AND H
                      //$src = imagecreatefromjpeg($source_pic);
                      list($width, $height) = getimagesize($val['tmp_name']);

                      $x_ratio = $max_width / $width;
                      $y_ratio = $max_height / $height;

                      if (($width <= $max_width) && ($height <= $max_height)) {
                          $tn_width = $width;
                          $tn_height = $height;
                      } elseif (($x_ratio * $height) < $max_height) {
                          $tn_height = ceil($x_ratio * $height);
                          $tn_width = $max_width;
                      } else {
                          $tn_width = ceil($y_ratio * $width);
                          $tn_height = $max_height;
                      }


                      //we will give an unique name, for example the time in unix time format
                      $image_name = $filename;
                      //the new name will be containing the full path where will be stored (images folder)
                      $newname = "../img/blog/" . $filename;
                      //we verify if the image has been uploaded, and print error instead
                      $copied = copy($val['tmp_name'], $newname);
                      if (!$copied) {
                          print('not copied');

                          $_REQUEST['dsp'] = 'edit';
                          $_REQUEST['error'] = 3;
                          break;
                      }else{
                        print "copied";
                      }
                      print('POST' . $image_name);
                      $blog->add_image($blog_id, $image_name, $tn_width, $tn_height);


                  }
                }
                $_REQUEST['dsp'] = 'view';
                $added = 1;
            }



        break;

    }



    case('add'): {

        $blog->add($_POST);
        $_REQUEST['dsp'] = 'view';
        $_GET['added'] = 1;
        break;

        }

    case('edit'): {
            $image = $_FILES['image']['name'];
            //if it is not empty
            if ($image) {
                //get the original name of the file from the clients machine
                $filename = stripslashes($_FILES['image']['name']);
                //get the extension of the file in a lower case format
                $extension = getExtension($filename);
                $extension = strtolower($extension);
                //if it is not a known extension, we will suppose it is an error and will not  upload the file,
                //otherwise we will do more tests
                if (($extension != "jpg") && ($extension != "jpeg") && ($extension != "png") && ($extension != "gif")) {
                    $_GET['id'] = $_POST['id'];
                    $_REQUEST['dsp'] = 'edit';
                    $_REQUEST['error'] = 1;
                    break;
                } else {
                    //get the size of the image in bytes
                    //$_FILES['image']['tmp_name'] is the temporary filename of the file
                    //in which the uploaded file was stored on the server
                    $size = filesize($_FILES['image']['tmp_name']);

                    //compare the size with the maxim size we defined and print error if bigger
                    if ($size > MAX_SIZE * 1024) {
                        $_GET['id'] = $_POST['id'];
                        $_REQUEST['dsp'] = 'edit';
                        $_REQUEST['error'] = 2;
                        break;
                    }
                    //FIGURE OUT THE RATIO W AND H
                    //$src = imagecreatefromjpeg($source_pic);
                    list($width, $height) = getimagesize($_FILES['image']['tmp_name']);

                    $x_ratio = $max_width / $width;
                    $y_ratio = $max_height / $height;

                    if (($width <= $max_width) && ($height <= $max_height)) {
                        $tn_width = $width;
                        $tn_height = $height;
                    } elseif (($x_ratio * $height) < $max_height) {
                        $tn_height = ceil($x_ratio * $height);
                        $tn_width = $max_width;
                    } else {
                        $tn_width = ceil($y_ratio * $width);
                        $tn_height = $max_height;
                    }


                    //we will give an unique name, for example the time in unix time format
                    $image_name = time() . '.' . $extension;
                    //the new name will be containing the full path where will be stored (images folder)
                    $newname = "../images/" . $image_name;
                    //we verify if the image has been uploaded, and print error instead
                    $copied = copy($_FILES['image']['tmp_name'], $newname);
                    if (!$copied) {
                        $_GET['id'] = $_POST['id'];
                        $_REQUEST['dsp'] = 'edit';
                        $_REQUEST['error'] = 3;
                        break;
                    }

                    edit($_POST, $image_name, $tn_width, $tn_height);
                    $_GET['id'] = $_POST['id'];
                    $_REQUEST['dsp'] = 'view';

                    break;
                }
            } else {
                $pic = null;
                $w = 0;
                $h = 0;
                $blog->edit($_POST, $pic, $w, $h);
                $edited  = 1;
            }
            break;
        }

    case('delete'): {
            $blog->delete($_GET['id']);
            $_REQUEST['dsp'] = 'view';
            break;
        }
}


//grab errors
if (isset($_REQUEST['error']))
    $error = $_REQUEST['error'];
else
    $error = 0;



## DSP ##
switch ($_REQUEST['dsp']) {

    case('edit'): { //print_r(get_FAQ($_GET['id']));
            $blogs = $blog->get_blog_edit($_GET['id']);
            $id = $_GET['id'];
            $body .= "edit.php";
            break;
        }
    case('add'): {

            $body .= "add.php";
            break;
        }

    case('add_images'): {
        $id= $_GET['id'];
        $body .= "add_image.php";
        break;
    }
    default: {
            $blogs =  $blog->getAll();

            $body .="view.php";
            break;
        }
}

include_once('views/header.php');
include_once($body);
include_once('views/footer.php');

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
