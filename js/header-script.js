$( document ).ready(function(){
	$('#nav_btn').click(function() {
		$(this).toggleClass('active');
		$("#flags").toggleClass("hidden");
		$('#overlay').toggleClass('open');	
	});
});