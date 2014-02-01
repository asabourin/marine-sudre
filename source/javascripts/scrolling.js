function setupSmoothScrolling() {
    $('a[href*=#]').each(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname
	    && this.hash.replace(/#/,'') ) {
	      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	       if ($target) {
	         var targetOffset = $target.offset().top;
	         $(this).click(function() {
	         	$('article').fadeOut();
	           	$('html, body').animate({scrollTop: targetOffset}, 1000, function() {
					$('article').show();
	           	});
	           	return false;
	         });
	      }
	    }
	  });
}

function setupScrollSpy() {
	$('.section').each(function(i) {
		var position = $(this).position();
        var url = "url('"+$(this).data("photo")+"')"
		$(this).scrollspy({
			min: position.top - Math.round($(this).height()/2),
			max: position.top + Math.round($(this).height()/2),
			onEnter: function(element, position) {
				$("#link"+element.id).addClass('active');
                $("#article"+element.id).fadeIn(600);
                fadeBackground(url)
			},
			onLeave: function(element, position) {
				$("#link"+element.id).removeClass('active');
                $("#article"+element.id).fadeOut();
			}
		});
	});
}

function fadeBackground(url) {
	$("#oldbackground").css("background-image", $("#background").css("background-image")).show();
    $("#background").hide().css("background-image", url);
    $("#background").fadeIn(1000);
}