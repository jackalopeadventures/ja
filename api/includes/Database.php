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


   public function __construct($host = null, $username = null, $password = null, $db = null, $port = null, $charset = 'utf8')
   {
       $this->rows = 0;
       $this->affectedRows = 0;
       $this->host = $host;
       $this->user=$username;
       $this->password = $password;
       $this->database = $db;
       $this->port= $port;
       $this->charset = $charset;

   }
	 // Function connects to MySQL Server
	 function openLink()
	 {
	  	$this->linkDB = @mysql_connect($this->host, $this->user,$this->password) or
						die (print "Class Database: Error while connecting to the database");

              @mysql_select_db($this->database) ;
	 }

	//  // Selecting Database
	//  function selectDB()
	//  {
	//  	//@mysql_select_db($this->database,$this->linkDB) or die (print "Class Database: Error while selecting DB");
	//  }

	 // Closing MySQL Connection
	 function closeDB()
	 {
	 	  mysql_close();
	 }

	 // Executing Query
	 function execQuery($query)
	 {

	 	$this->openLink();
	 	$this->sqlQuery = $query;
    
		$this->result = @mysql_query($query,$this->linkDB) or die (print "<pre>Class Database: Error while executing Query.<br>Query: $query".
																   "<br>Error: ".mysql_error()."</pre>");

		$this->affectedRows = mysql_affected_rows($this->linkDB);

		if(preg_match('/INSERT/',$query))
		{

			$this->id = mysql_insert_id();
		}

		if(preg_match("/SELECT/",$query))
		{
			$this->rows = mysql_num_rows($this->result);
		}

		$this->closeDB();
	 }

}

?>
