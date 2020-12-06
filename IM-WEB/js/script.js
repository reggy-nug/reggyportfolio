$('.page-scroll').on('click',function(e){

	var href = $(this).attr('href');
	var elemenHref = $(href);
	
	$('html,body').animate({
		scrollTop:elemenHref.offset().top-50
	},500);
	
	
});