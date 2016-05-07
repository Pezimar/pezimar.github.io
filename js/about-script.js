$( document ).ready(function(){
	//Scroll
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if (wScroll > $("#about_div_1").offset().top - 700) {
			$("#about_div_1").animate({'opacity':'1'}, 300);
			$("#about_div_2").delay(800).animate({'opacity':'1'}, 300);
		}
	});
});