<?php
 header("Access-Control-Allow-Origin: *");
 require_once('includes/User.php');
 require_once ('includes/config.php');
//
 $user = new User($db);
 $user->getAll();
 ?>
