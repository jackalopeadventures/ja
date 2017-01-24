
<table width = '500' align='center'>


    <form action="blog.php?action=add" enctype="multipart/form-data" method="post">
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
            <td align="right"><strong>Title:</strong> </td>

            <td><input type='text' name='title' size='40'  ></td>

        </tr>
        <tr>


            <td valign="top" align="right"><strong>Blog:</strong> </td>

            <td><textarea name="blog" style="width:1000px; height:400px;"></textarea></td>

        </tr>
        <tr>
            <td align="right"><strong>Image Description:</strong> </td>

            <td><input type='text' name='img_desc' size='80'  ></td>

        </tr>
        <tr>


            <td valign="top" align="right"><strong>Upload Image:</strong> </td>

            <td><input type="file" name="image" size="40"></td>
        </tr>


        <tr valign="top" >

            <td align="center" colspan='2'>
              	<input type="submit" name="saveForLater" value="Save For Later">&nbsp;
                <input type="submit" name="request" value="Request"></td>

        </tr>

    </form>

</td>

</tr>
</table>
