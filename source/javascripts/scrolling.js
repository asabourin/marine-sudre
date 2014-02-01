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