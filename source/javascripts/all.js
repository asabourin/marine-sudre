//= require_tree .

$(document).ready(function(){
	setupParallaxBackgrounds();
    setupSmoothScrolling();
    textFit($('#bigtext')[0], {maxFontSize: 250})
    $('#subtitle').css("top", $(".textFitted").css("font-size"));
    textFit($('#subtitle')[0], {maxFontSize: 250})
    $('#nav').scrollspy({
    	max: $("#nav").offset().top,
        onEnter: function(element, position) {
            $("#nav").removeClass('fixed');
        },
        onLeave: function(element, position) {
            $("#nav").addClass('fixed');
        }
    });


    $('section').each(function(i) {
		var position = $(this).position();
		$(this).scrollspy({
			min: position.top - Math.round($(this).height()/2),
			max: position.top + Math.round($(this).height()/2),
			onEnter: function(element, position) {
				$("#link"+element.id).addClass('active');
			},
			onLeave: function(element, position) {
				$("#link"+element.id).removeClass('active');
			}
		});
	});



}); 

