$('form').submit(function(e){
	e.preventDefault();

	$.post(
		$(this).attr('action'),
		$(this).serialize(),
		function(res){
			alert(res.msg);
		}
	)			

})
