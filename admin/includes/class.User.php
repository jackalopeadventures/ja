<?php

    require_once ('class.Database.php');

    class User{
        var $db;

        public function __construct(){

          $this->db = new Database();
        }
        public function getAll(){

          $this->db->execQuery('SELECT * from user');
          $arrLog = NULL;

              while($lst = mysqli_fetch_array($this->db->result))
                      {$arrLog[]= $lst;}

                 return $arrLog;

        }


        public function getUserByEmail($email){

          $this->db->execQuery('SELECT * from user where email ="'.$email.'"');
          $arrLog = NULL;
          if($this->db->rows > 0){
            while($lst = mysqli_fetch_array($this->db->result))
                      {$arrLog[]= $lst;}
                      print_r($arrLog);
            return $arrLog;
          }else{
            print "false";
            return false;
          }


        }

        public function getUser($id){

          $this->db->execQuery('SELECT * from user where id ='.$id);
          $arrLog = NULL;
          if($this->db->rows > 0){
              while($lst = mysqli_fetch_array($this->db->result))
                      {$arrLog[]= $lst;}

                 return $arrLog;
          }else
              return false;

        }

        public function register($post,$pwrd){

            $sql = "INSERT into user set email = '$post',password='$pwrd' ";
            $this->db->execQuery($sql);


        }

        public function delete($id){

            $sql = "DELETE from user where id = '$id'";

            $this->db->execQuery($sql);


        }



    }

 ?>
