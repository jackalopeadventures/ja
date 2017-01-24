

<table cellspacing=0 cellpadding=0 style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;margin-left:50px;">

	<tr>

		<td valign=top>

		<strong> Blogs</strong>&nbsp;&nbsp;

			<a href='blog.php?dsp=add'><strong>Add </strong></a><BR>

			<ul>

				<?php foreach ($blogs as $k=>$blogs){  ?>


				<table style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">

					<tr valign="top">

						<td><strong>iS Final?:</strong> </td>

						<td><?=$blogs['isFinal'] ?></td>

					</tr>

					<tr valign="top">

						<td><strong>Date:</strong> </td>

						<td><?=$blogs['date'] ?></td>

					</tr>

					<tr valign="top">

						<td><strong>Title:</strong> </td>

						<td><?=$blogs['title']?></td>

					</tr>




					<tr valign="top">

						<td align='left' colspan='2'>
						<?php if ($blogs['count'] !=0){ ?>
                                                    <a href='comment.php?dsp=view&id=<?=$blogs['id']?>'><strong>View/Edit <?= $blogs['count'] ?> Comments</strong></a>&nbsp;|&nbsp;
                                                <?php } ?>
						<a href='blog.php?action=delete&id=<?=$blogs['id']?>'><strong>Delete </strong></a>&nbsp;|&nbsp;

						<a href='blog.php?dsp=edit&id=<?=$blogs['id']?>'><strong>Edit </strong></a></td>

					</tr>
					<tr><td><hr /></td></tr>


				</table>



                                <?php  }  ?>

			</ul>



		</td>

	</tr>

</table>

</div>
