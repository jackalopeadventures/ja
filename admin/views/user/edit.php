
<table  align='center'>


<form action="blog.php?action=edit" enctype="multipart/form-data" method="post">
 <?php foreach ($user as $k=>$user){  ?>
		<input type='hidden' name='id' size='40' value="<?=$user['id']?>"  >
    <tr>
		<td align="right"><strong>User Name:</strong> </td>

		<td><input type='text' name='username' size='40'  value="<?=$user['username'] ?>"></td>

	</tr>
	<tr>


		<td valign="top" align="right"><strong>Password:</strong> </td>

    <td><input type='text' name='password' size='40'  value="<?=$user['password'] ?>"></td>


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
