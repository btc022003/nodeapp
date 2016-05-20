$.getJSON('news.json',null,function(res){
	// alert(res.msg);
	$('<ul></ul>').appendTo('body');
	res.items.forEach(function(item,index){

		$('<li>'+item.title+'</li>').appendTo('ul');
	})
});

$('form').submit(function(e){
	e.preventDefault();

	// $.post(
	// 	$(this).attr('action'),
	// 	$(this).serialize(),
	// 	function(res){
	// 		alert(res.msg);
	// 	}
	// )
	
	
	
	$.ajax({
		url: $(this).attr('action'),
		type: 'post',
		dataType: 'json',
		data: $(this).serialize(),
	})
	.done(function(res) {
		console.log("success");
		alert(res.msg);
	})
	.fail(function(err) {
		console.log("error");
	})
	.always(function(err) {
		console.log("complete");
	});

})





