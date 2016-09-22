<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
include_once('../admin/includes/class.User.php');

$dsp = '';
if(isset($_REQUEST['dsp'])){
   $dsp =  $_REQUEST['dsp'];
}

//



switch ($dsp) {
 case 'user':

   break;

 default:
   $user = new User();
   $users = $user->getAll();
   echo json_encode($users);
   break;
}
 ?>
