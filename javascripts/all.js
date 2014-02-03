function maximizeTitle(){textFit($("#title")[0],{maxFontSize:250}),$("#subtitle").css("top",$(".textFitted").css("font-size")),textFit($("#subtitle")[0],{maxFontSize:250})}function setupScrollSpy(){$(".section").each(function(){var t=$(this),e=t.position(),n=t.css("background-image");t.scrollspy({min:e.top-Math.round(t.height()/2),max:e.top+Math.round(t.height()/2),onEnter:function(t){$("#link-"+t.id).addClass("active"),$("#article-"+t.id).fadeIn(600),transitionBackgrounds(n)},onLeave:function(t){$("#link-"+t.id).removeClass("active"),$("#article-"+t.id).fadeOut()}})})}function transitionBackgrounds(t){$("#oldbackground").css("background-image",$("#background").css("background-image")).show(),$("#background").hide().css("background-image",t),$("#background").fadeIn(1200)}!function(t,e){t.fn.extend({scrollspy:function(n){var i={min:0,max:0,mode:"vertical",buffer:0,container:e,onEnter:n.onEnter?n.onEnter:[],onLeave:n.onLeave?n.onLeave:[],onTick:n.onTick?n.onTick:[]},n=t.extend({},i,n);return this.each(function(){var e=this,i=n,o=t(i.container),r=i.mode,a=i.buffer,s=leaves=0,l=!1;o.bind("scroll",function(){var n={top:t(this).scrollTop(),left:t(this).scrollLeft()},c="vertical"==r?n.top+a:n.left+a,u=i.max,d=i.min;t.isFunction(i.max)&&(u=i.max()),t.isFunction(i.min)&&(d=i.min()),0==u&&(u="vertical"==r?o.height():o.outerWidth()+t(e).outerWidth()),c>=d&&u>=c?(l||(l=!0,s++,t(e).trigger("scrollEnter",{position:n}),t.isFunction(i.onEnter)&&i.onEnter(e,n)),t(e).trigger("scrollTick",{position:n,inside:l,enters:s,leaves:leaves}),t.isFunction(i.onTick)&&i.onTick(e,n,l,s,leaves)):l&&(l=!1,leaves++,t(e).trigger("scrollLeave",{position:n,leaves:leaves}),t.isFunction(i.onLeave)&&i.onLeave(e,n))})})}})}(jQuery,window),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):t.textFit=e()}("object"==typeof global?global:this,function(){"use strict";return function(t,e){function n(t){if(!r(t)||!l.reProcess&&t.getAttribute("textFitted"))return!1;l.reProcess||t.setAttribute("textFitted",1);var e,n,c,u,d,f,p;if(c=t.innerHTML,u=o(t),n=i(t),!u||!l.widthOnly&&!n)return window.console&&!l.suppressErrors&&(l.widthOnly?console.info("Set a static width on the target element "+t.outerHTML+" before using textFit!"):console.info("Set a static height and width on the target element "+t.outerHTML+" before using textFit!")),!1;-1===c.indexOf("textFitted")?(e=document.createElement("span"),e.className="textFitted",e.style.display="inline-block",e.innerHTML=c,t.innerHTML="",t.appendChild(e)):(e=t.querySelector("span.textFitted"),a(e,"textFitAlignVert")&&(e.className=e.className.replace("textFitAlignVert",""))),l.alignHoriz&&(t.style["text-align"]="center",e.style["text-align"]="center");var g=l.multiLine;for(l.detectMultiLine&&!g&&e.offsetHeight>=2*parseInt(window.getComputedStyle(e)["font-size"],10)&&(g=!0),g||(t.style["white-space"]="nowrap"),d=l.minFontSize+1,p=l.maxFontSize+1;p>=d;)f=parseInt((d+p)/2,10),e.style.fontSize=f+"px",e.offsetWidth<=u&&(l.widthOnly||e.offsetHeight<=n)?d=f+1:p=f-1;if(e.style.fontSize=f-1+"px",l.alignVert){s();var m=e.offsetHeight;"static"===window.getComputedStyle(t).position&&(t.style.position="relative"),a(e,"textFitAlignVert")||(e.className=e.className+" textFitAlignVert"),e.style.height=m+"px"}}function i(t){var e=window.getComputedStyle(t,null);return t.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function o(t){var e=window.getComputedStyle(t,null);return t.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function r(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function a(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function s(){if(!document.getElementById("textFitStyleSheet")){var t=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=t,document.body.appendChild(e)}}var l={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:6,maxFontSize:80,reProcess:!0,widthOnly:!1,suppressErrors:!1};for(var c in e)e.hasOwnProperty(c)&&(l[c]=e[c]);"function"==typeof t.toArray&&(t=t.toArray());var u=Object.prototype.toString.call(t);"[object Array]"!==u&&"[object NodeList]"!==u&&(t=[t]);for(var d=0;d<t.length;d++)n(t[d])}}),$(document).ready(function(){maximizeTitle(),setupScrollSpy()});