<?php
include_once('includes/config.php');
include_once('includes/class.User.php');
include_once('includes/global_functions.php');
 include_once('views/header.php');
$current_user = $_SESSION['user'];
$user = new User();
$body = 'views/user/';

//
if(! isset($_REQUEST['action'])){
    $_REQUEST['action'] = null;
}
if(! isset($_REQUEST['dsp'])){
    $_REQUEST['dsp'] = null;
}
//
//
//
//

switch ($_REQUEST['action']) {
  case('delete'): {
          $user->delete($_GET['id']);
          print "user deleted";
          break;
      }
  case('add'):{
    $post = $_POST;
      $username = $user->getUserByEmail($post['username']);

      if($username ==false){
        $pwrd = password_hash($post['password'], PASSWORD_BCRYPT);
        $user->register($post['username'],$pwrd);
        print "User Added";
      }else{
        print "there is already a user with that name";
      //  echo json_encode(['success':'false','error':'User Already in database']);
      }
    }

  }
//
//
//
//     case('edit'): {
//
//             break;
//         }
//

// }
//
//
// //grab errors
// if (isset($_REQUEST['error']))
//     $error = $_REQUEST['error'];
// else
//     $error = 0;
//
//
//
// ## DSP ##
switch ($_REQUEST['dsp']) {

  //
  case('add'):{
    $body .="add.php";
    break;
  }

    default: {

          $users =  $user->getAll();
          $body .="view.php";
          break;
        }
}


include_once($body);
include_once('views/footer.php');

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
