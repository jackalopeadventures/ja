<?php
require_once ('Database.php');


class User{
  var $db;

  public function __construct($db){

    $this->db = $db;
  }
  public function getAll(){

    $this->db->execQuery('select * from user');
    $arrLog = NULL;

	while($lst = mysql_fetch_array($this->db->result,MYSQL_ASSOC))
		{$arrLog[]= $lst;}

	   echo $json_info = json_encode($arrLog);

  }


}

 ?>
