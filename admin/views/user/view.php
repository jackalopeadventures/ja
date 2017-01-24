

<table cellspacing=0 cellpadding=0 style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;margin-left:50px;">

	<tr>

		<td valign=top>

		<strong> Users</strong>&nbsp;&nbsp;

			<a href='users.php?dsp=add'><strong>Add </strong></a><BR>

			<ul>

				<?php foreach ($users as $k=>$user){
					if($current_user =='coreysmaller@gmail.com'  || $current_user ==$user['email']){
					 ?>


				<table style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">




					<tr valign="top">

						<td><strong>User Name:</strong> </td>

						<td><?=$user['email']?></td>

					</tr>




					<tr valign="top">

						<td align='left' colspan='2'>

						<a href='users.php?action=delete&id=<?=$user['id']?>'><strong>Delete </strong></a>&nbsp;|&nbsp;

						<a href='users.php?dsp=edit&id=<?=$user['id']?>'><strong>Edit </strong></a></td>

					</tr>
					<tr><td><hr /></td></tr>


				</table>



                                <?php }  }  ?>

			</ul>



		</td>

	</tr>

</table>

</div>
