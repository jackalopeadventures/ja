<?php
$alert = null;

if (isset($_GET['error'])) {
      $alert = 'Error Logging In. Please try again';
}
                   
if ($_GET['register'] == 1) {
    $alert = "Congratulations! you are now registered. Please login to continue";
}

include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Chick Magnet Anonymous</title>
        <?php include_once('meta.php'); ?>
    </head>

    <body>
        <?php include_once("includes/analytics.php") ?>
        <?php include_once('main_header.php'); ?>

	<div class='blurb' style="text-align:center">
                
                <form action="includes/process_login.php" method="post" name="login_form" >                      
                    <input type="text" name="email" placeholder="Email" class='form-control ' />
                     <input type="password" class='form-control'
                                     name="password" 
                                     id="password" placeholder="Password" />
                                     <br/>
                    <input type="button" class="btn btn-primary"
                           value="SUBMIT"  
                           onclick="formhash(this.form, this.form.password);" /> 
                </form>

                <?php
                if (login_check($mysqli) == true) {
                    echo '<p>Currently logged ' . $logged . ' as ' . htmlentities($_SESSION['username']) . '.</p>';

                    echo '<p>Do you want to change user? <a href="includes/logout.php">Log out</a></p>';
                } else {
                    
                    echo "<p><a href='register.php'>Join Now</a></p>";
                }
                ?>      
            </div>
            
        <?php include_once('footer.php'); ?>