
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

		<td><textarea name="blog" style="width:1000px; height:400px;"><?=$blogs['blog']?></textarea></td>

	</tr>
    <tr>
		<td align="right"><strong>Image Description:</strong> </td>

		<td><input type='text' name='img_desc' size='80' value="<?=$blogs['img_desc']  ?>" ></td>
˙
	</tr>



	<tr valign="top" >

		<td align="center" colspan='2'>
			<input type="submit" name="saveForLater" value="Save For Later">&nbsp;
			<input type="submit" name="update" value="Update"></td>

	</tr>




 <?php  } ?>
		</form>

		</td>

	</tr>
<tr>
    <td>

 <form action="blog.php?action=add_images" enctype="multipart/form-data" method="post">
   <table>
   <tr>


 		<td valign="top" align="right"><strong>Upload Images:</strong> </td>
	<input type='hidden' name='id' size='40' value="<?=$id?>"  >
 		<td><input type="file" multiple="multiple" name="files[]" /></td>
    <td><input type="submit" name="saveImg" value="SaveImg"></td>
 	</tr>
</table>
</td>
</tr>
</table>
