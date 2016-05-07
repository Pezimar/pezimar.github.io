$( document ).ready(function(){
	$("#header").load("header.html"); 
	$("#footer").load("footer.html");
	var verkefniAjaxLoad = function() {
		$.ajax({
					type: 'GET',
					url: 'ajax/verkefniAjax.html',
					success: function(data) {
						$("#verkefni").append(data);
					}
				});
	}
	var ljodAjaxLoad = function() {
		$.ajax({
					type: 'GET',
					url: 'ajax/ljodAjax.html',
					success: function(data) {
						$("#ljod").append(data);
					}
				});
	}
	var verkefniAjaxBool = false;
	var ljodAjaxBool = false;
	//Scroll
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		//$("#px_header_profile").css({'transform' : 'translate(0px,' + wScroll/10 + '%)'});
		if (wScroll > 200) {
			if(!verkefniAjaxBool) {
				verkefniAjaxLoad();
				verkefniAjaxBool = true;
			}
		}
		if (wScroll > 1900) {
			if(!ljodAjaxBool) {
				ljodAjaxLoad();
				ljodAjaxBool = true;
			}
		}
	});
	$("#px_pr_index_chattBubble").delay( 3000 ).animate({'opacity':'1'},500);
	//Verkefni
	$(".togglePopUp").click(function() {
		var project = $(this).data('proj');
		$("#popUp" + project).toggleClass("active");
	});
});