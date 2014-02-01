//= require_tree .

$(document).ready(function(){
	
    setupParallaxBackgrounds();
    setupSmoothScrolling();
    setupScrollSpy();

    textFit($('#bigtext')[0], {maxFontSize: 250})
    $('#subtitle').css("top", $(".textFitted").css("font-size")); //Subtitle below big title
    textFit($('#subtitle')[0], {maxFontSize: 250})

}); 

