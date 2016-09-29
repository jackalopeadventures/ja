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
  case 'reg':
  $post = $_POST;
    $user = new User();
    $username = $user->getUserByEmail($post['username']);
    if($username !=false){
      $pwrd = password_hash($post['password'], PASSWORD_BCRYPT);
      $user->register($post['username'],$pwrd);
      echo json_encode(['success':'true']);
    }else{
      echo json_encode(['success':'false','error':'User Already in database']);
    }
  break;
 default:
   $user = new User();
   $users = $user->getAll();
   echo json_encode($users);
   break;
}
 ?>
