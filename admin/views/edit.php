
<table  align='center'>
	
	
<form action="blog.php?action=edit" enctype="multipart/form-data" method="post">
 <?php foreach ($blogs as $k=>$blogs){  ?>
		<input type='hidden' name='id' size='40' value="<?=$blogs['id']?>"  >
    <tr>
		<td align="right"><strong>Title:</strong> </td>

		<td><input type='text' name='title' size='40'  value="<?=$blogs['title'] ?>"></td>

	</tr>
	<tr>
		

		<td valign="top" align="right"><strong>Blog:</strong> </td>

		<td><textarea name="blog" cols="120" rows ='120'><?=$blogs['blog']?></textarea></td>
        
	</tr>
    <tr>
		<td align="right"><strong>Image Description:</strong> </td>

		<td><input type='text' name='img_desc' size='80' value="<?=$blogs['img_desc']  ?>" ></td>
˙
	</tr>
	<tr>
		

		<td valign="top" align="right"><strong>Upload Image:</strong> </td>

		<td><input type="file" name="image" size="40"></td>
	</tr>
	
	
	<tr valign="top" >

		<td align="center" colspan='2'><input type="submit" name="request" value="Update"></td>

	</tr>



	
 <?php  } ?>
		</form>

		</td>

	</tr>
 </table>
 