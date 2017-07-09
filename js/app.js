$(document).ready(function(){
	
	var $heart = $('.heart'),
		$addComment = $('.photo__add-comment');
	
	$heart.click(function(){
		$(this).toggleClass('fa-heart-o fa-heart')
	});

	$addComment.keydown(function(event){
		if(event.keyCode == 13){
			var newComment = event.target.value;
			var commentList = $(this).parent().parent().children('.photo__comments');
			$(this).val('').blur();
			commentList.append("<li class='photo__comment'>\
				<span class='photo__comment-author'>serranoarevalo</span>)"
			 + newComment + "</li>");
		}
	})
})
