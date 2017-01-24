<?php
 header("Access-Control-Allow-Origin: *");
 // error_reporting(E_ALL);
 // ini_set('display_errors', '1');
include_once('../admin/includes/class.Blog.php');

 $dsp = '';
if(isset($_REQUEST['dsp'])){
    $dsp =  $_REQUEST['dsp'];
}

if(isset($_REQUEST['id'])){
    $id =  $_REQUEST['id'];
}


//

$blog = new Blog();

switch ($dsp) {
  case 'latest':

    $blogs = $blog->getAllLatest();
    echo json_encode($blogs);
  break;
  case 'all':

    $blogs = $blog->getAll();
    echo json_encode($blogs);
  break;
  case 'blog':

    $blogs = $blog->getBlog($id);
    echo json_encode($blogs);
  break;
  case 'addView':
    $id = $_GET['id'];
    $blogs = $blog->addView($id);
  //  echo json_encode($blogs);
  break;

  default:

    $blogs = $blog->getAll();
    echo json_encode($blogs);
    break;
}

 ?>
