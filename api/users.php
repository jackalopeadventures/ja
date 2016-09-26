<?php
 header("Access-Control-Allow-Origin: *");

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
