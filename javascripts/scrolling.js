function setupSmoothScrolling(){$("a[href*=#]").each(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&this.hash.replace(/#/,"")){var a=$(this.hash),t=$("[name="+this.hash.slice(1)+"]"),n=a.length?a:t.length?t:!1;if(n){var i=n.offset().top;$(this).click(function(){return $("article").fadeOut(),$("html, body").animate({scrollTop:i},1e3,function(){$("article").show()}),!1})}}})}function setupScrollSpy(){$("section").each(function(){var a=$(this).position(),t="url('"+$(this).data("photo")+"')";$(this).scrollspy({min:a.top-Math.round($(this).height()/2),max:a.top+Math.round($(this).height()/2),onEnter:function(a){$("#link"+a.id).addClass("active"),$("#article"+a.id).fadeIn(600),fadeBackground(t)},onLeave:function(a){$("#link"+a.id).removeClass("active"),$("#article"+a.id).fadeOut()}})})}function fadeBackground(a){$("#oldbackground").css("background-image",$("#background").css("background-image")).show(),$("#background").hide().css("background-image",a),$("#background").fadeIn(1e3)}