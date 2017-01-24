<div style="float:right; padding-left:10px; width:550px;">

<table cellspacing=0 cellpadding=0 style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">

	<tr>

		<td valign=top>

		<strong> Blogs</strong>&nbsp;&nbsp;

			

			<ul>
				
				{foreach from=$comments item=comments}

				

				<table style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">

					<tr valign="top">

						<td><strong>Date:</strong> </td>

						<td>{$comments.date}</td>

					</tr>

					<tr valign="top">

						<td><strong>Name:</strong> </td>

						<td>{$comments.name}</td>

					</tr>
					<tr valign="top">

						<td><strong>Comment:</strong> </td>

						<td>{$comments.comment}</td>

					</tr>
					<tr valign="top">

						<td><strong>Email:</strong> </td>

						<td><a href="mailto:{$comment.email}">{$comments.email}</a></td>

					</tr>
					

					<tr valign="top">

						<td><strong>Blog:</strong> </td>

						<td>{$comments.blog|sslash}</td>

					</tr>

					

					<tr valign="top">

						<td align='center' colspan='2'>
						
						<a href='comment.php?action=delete&comment_id={$comments.id}&blog_id={$blog_id}'><strong>Delete </strong></a>

						

					</tr>
					<tr><td><hr /></td></tr>
					

				</table>

				

				{/foreach}
				{else }
                	sorry, there are no comments for this blog.
                 {/if}
			</ul>

			

		</td>

	</tr>

</table>

</div>