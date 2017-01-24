
<table width = '500' align='center'>


    <form action="users.php?action=add" enctype="multipart/form-data" method="post">
        <?php if ($error != '0') { ?>

            <tr><td colspan="2"><font color ='red'>
                    <?php
                    if ($error == '1') {
                        print "Sorry, that image extension is not something PHP understands. Please try a different image or change your image to a .gif, .jpg or .png";
                    } else if ($error == '2') {
                        print "Sorry, the image size is too large. Please alter it or upload a different image";
                    } else if ($error == '3') {
                        print "Sorry, there was a copy and move issue with the server. Please try again";
                    }
                    ?>
                    </font></td></tr>

<?php } ?>

        <tr>
            <td align="right"><strong>uname:</strong> </td>

            <td><input type='text' name='username'  ></td>

        </tr>
        <tr>
            <td align="right"><strong>pwrd:</strong> </td>

            <td><input type='password' name='password'  ></td>

        </tr>



        <tr valign="top" >

            <td align="center" colspan='2'>

                <input type="submit" name="request" value="Save"></td>

        </tr>

    </form>

</td>

</tr>
</table>
