function setupParallaxBackgrounds(){$window=$(window),$('section[data-type="background"]').each(function(){var t=$(this);$(window).scroll(function(){var n=-(($window.scrollTop()-t.offset().top)/t.data("speed")),e="50% "+n+"px";t.css({backgroundPosition:e})})})}function setupSmoothScrolling(){$("a[href*=#]").each(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&this.hash.replace(/#/,"")){var t=$(this.hash),n=$("[name="+this.hash.slice(1)+"]"),e=t.length?t:n.length?n:!1;if(e){var i=e.offset().top;$(this).click(function(){return $("article").hide(),$("html, body").animate({scrollTop:i},1e3,function(){$("article").show()}),!1})}}})}/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
!function(t){t.fn.fitText=function(n,e){var i=n||1,o=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},e);return this.each(function(){var n=t(this),e=function(){n.css("font-size",Math.max(Math.min(n.width()/(10*i),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize)))};e(),t(window).on("resize.fittext orientationchange.fittext",e)})}}(jQuery),$(document).ready(function(){setupParallaxBackgrounds(),setupSmoothScrolling(),jQuery("#bigtext").fitText(.7)});