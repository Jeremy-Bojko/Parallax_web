$(window).scroll(function() {

	var wScroll = $(this).scrollTop(); 

	$('.logo').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'
	}); 

	$('.back-bird').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'
	}); 

	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+wScroll/40+'%)'
	}); 

	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.3)) {
		$('.clothes-pics figure').each(function(i) {

			setTimeout(function() {
				$('.clothes-pics figure')
				.eq(i)
				.addClass('is-showing'); 
			}, 150 * (i+1) );

		}); 
	}


	if(wScroll < $('.clothes-pics').offset().top - ($(window).height() / 1.3)) {
		$('.clothes-pics figure').each(function(i) {

			setTimeout(function() {
				$('.clothes-pics figure')
				.eq(i)
				.removeClass('is-showing'); 
			}, 150 * (i+1) );

		}); 
	}

	console.log("Scroll : "+wScroll+", offset : "+$('.large-window').offset().top)
	console.log("HELLO");
	//decallage de l'image dans le periscope vers le bas 
	if(wScroll > $('.large-window').offset().top - $(window).height()) {
		var decallage = wScroll-$('.large-window').offset().top;
		$('.large-window').css({'background-position':'center '+decallage+'px'}); 

		var opacity = ( wScroll - $('.large-window').offset().top +400)/ (wScroll/5);
		$('.window-tint').css({'opacity':opacity});  
	}












});







