<?php
 //header("Access-Control-Allow-Origin: *");
 error_reporting(E_ALL);
 ini_set('display_errors', '1');
include_once('../admin/includes/class.Blog.php');

 $dsp = '';
if(isset($_REQUEST['dsp'])){
    $dsp =  $_REQUEST['dsp'];
}

//



switch ($dsp) {
  case 'latest':
    $blog = new Blog();
    $blogs = $blog->getAllLatest();
    echo json_encode($blogs);
  break;

  default:
    $blog = new Blog();
    $blogs = $blog->getAll();
    echo json_encode($blogs);
    break;
}

 ?>
