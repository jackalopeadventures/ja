<?php
/* 	This class provides one central database-connection. */

// Database Class
class Database
{
	 // Attributes (Member Variables)
	 var $host;  		//Hostname, Server
	 var $password; 	//Password
	 var $user; 		//User Name
	 var $database; 	//Database Name
	 var $linkDB;
	 var $sqlQuery;
	 var $result;
	 var $rows;
	 var $affectRows;
         var $isConnected = false;


   public function __construct($host = null, $username = null, $password = null, $db = null, $port = null, $charset = 'utf8')
   {
        
       include_once('database.config.php');
       
       $this->rows = 0;
       $this->affectedRows = 0;
       $this->host =  $config['host'];
       $this->user=$config['uname'];
       $this->password = $config['pwrd'] ;
       $this->database = $config['db'];
       $this->port= $port;
       $this->charset = $charset;

   }
   
   function connect(){
       $this->linkDB = @mysqli_connect($this->host, $this->user,$this->password) or
						die (print "Class Database: Error while connecting to the database");
       $this->isConnected = true;
       
   }
	 // Function connects to MySQL Server
    

   //  // Selecting Database
     function selectDB()
     {
     	@mysqli_select_db($this->linkDB,$this->database)  or die (print "Class Database: Error while selecting DB");
     }

    // Closing MySQL Connection
    function closeDB()
    {
             mysqli_close($this->linkDB);
             $this->isConnected = false;
    }

    // Executing Query
    function execQuery($query)
    {
            if(!$this->isConnected){
                $this->connect();
            }
            $this->selectDB();
            $this->sqlQuery = $query;

            $this->result = @mysqli_query($this->linkDB,$query) or die (print "<pre>Class Database: Error while executing Query.<br>Query: $query".
                                                                                                                               "<br>Error: ".mysqli_error($this->linkDB)."</pre>");

            $this->affectedRows = mysqli_affected_rows($this->linkDB);

            if(preg_match('/INSERT/',$query))
            {

                    $this->id = mysqli_insert_id();
            }

            if(preg_match("/SELECT/",$query))
            {
                    $this->rows = mysqli_num_rows($this->result);
            }

            $this->closeDB();
    }

}

?>

