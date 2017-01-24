<?php

error_reporting(E_ALL);
ini_set('display_errors', '0');
session_start();
include_once('includes/class.Database.php');
$db = new Database();
$db->connect();

$username = mysqli_real_escape_string($db->linkDB, $_POST['username']);
$password = mysqli_real_escape_string($db->linkDB, $_POST['password']);
$bool = true;
$db->execQuery("SELECT * from user WHERE email='$username'");
$exists = $db->rows; //Checks if username exists
$table_users = "";
$table_password = "";
if ($exists > 0) { //IF there are no returning rows or no existing username
    while ($row = mysqli_fetch_assoc($db->result)) { // display all rows from query

        $table_users = $row['email']; // the first username row is passed on to $table_users, and so on until the query is finished
        $table_password = $row['password']; // the first password row is passed on to $table_password, and so on until the query is finished
    }
    if($username == $table_users) {


        if (password_verify($password,$table_password)) {
            $_SESSION['user'] = $username; //set the username in a session. This serves as a global variable
            header("location: home.php"); // redirects the user to the authenticated home page
        } else {
            Print '<script>alert("Incorrect Password!");</script>'; // Prompts the user
            Print '<script>window.location.assign("index.php");</script>'; // redirects to login.php
        }
    } else {
        Print '<script>alert("Incorrect username!");</script>'; // Prompts the user
        Print '<script>window.location.assign("index.php");</script>'; // redirects to login.php
    }
}
    else {
        Print '<script>alert("Incorrect username or password!");</script>'; // Prompts the user
        Print '<script>window.location.assign("index.php");</script>'; // redirects to login.php
    }
    ?>
