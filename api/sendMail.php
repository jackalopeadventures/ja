<?php
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$data = json_decode(file_get_contents("php://input"));
$name =  $data->name;
$email = $data->email;
$content =  $data->content;
$success = array();
//emailer
$to      = 'coreysmaller@gmail.com';
$subject = 'message from Jackalope Adventures';

$msg = "From: ".$name."\n \n";
$msg .="Emailer: ".$email."\n \n";
$msg .= $content."\n \n";
$msg.="\n________________________________________________________\n \n";


$headers = 'From: info@jackalopeadventures.com' . "\r\n" .
   'Reply-To: info@jackalopeadventures.com' . "\r\n" .
   'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $msg, $headers)){
  $success['success'] = true;
}else{
 $success['success'] = false;
}
echo $json_info = json_encode($success);


?>
