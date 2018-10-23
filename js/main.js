$(window).scroll(function(){
	var st = $(this).scrollTop();
	$("p, h1, h2, h3").css({
		"transform":"translate(0%, "+ st /20  + "%"
	})
	});