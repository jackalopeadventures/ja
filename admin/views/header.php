<?php
include_once('security.php');
?>
<html>
    <head>
        <!-- <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
        <script>tinymce.init({selector: 'textarea', // change this value according to your HTML

                plugins: "image,anchor,link,textcolor colorpicker,hr,advlist,textpattern,table,spellchecker",
                menubar: "insert,table,tools",
                toolbar: "image imagetools,anchor,link,forecolor backcolor,table,spellchecker"
            });

            tinymce.activeEditor.setContent(html, {format: 'raw'});

            </script>
            <link rel="stylesheet" href="css/app.css" />
            <link rel="stylesheet" href="css/components.css" />
            <link rel="stylesheet" href="css/global.css" />-->

    </head>
    <body>

        <header>

            <a href="logout.php">logout</a><br/><br/>
            <ul class="admin ul">
                <li>
                    <a href="blog.php?dsp=blogs">BLOGS</a></li>
                <li><a href="users.php?dsp=users">USERS</a>

                </li>

            </ul>

        </header>

        <div class="admin-body">
