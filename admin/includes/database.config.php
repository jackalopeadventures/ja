<?php

    $testing = false;
    $config = array();
    
    if($testing){
        $config['host'] = 'localhost';
        $config['uname'] = 'root';
        $config['pwrd'] = 'root';
        $config['db'] = 'admin';
        
        
    }else{
        $config['host'] = 'localhost';
        $config['uname'] = 'chickma1_admin';
        $config['pwrd'] = 'Visions1';
        $config['db'] = 'chickma1_jackalope';
        
    }
