/*
###Yazar:Elizbar Yusuf
###Veb Sayt:http://elizbar.info
###Proje: menuPlugin.js
*/
(function($) {
	$.fn.menuPlugin = function(ayar) {
					var deg={
						effect:'slide',
						sec:500
						
						};
					
				var ayar = $.extend(deg,ayar);
					return this.each(function(){
						$(this).hover(function(){
						if(ayar.effect=='slide'){
						$(this).children("ul").hide().stop().slideDown(ayar.sec);
						}
						if(ayar.effect=='fade'){
						$(this).children("ul").hide().stop().fadeIn(ayar.sec);
						}
						if(ayar.effect=='show'){
						$(this).children("ul").hide().stop().show(ayar.sec);
						}
						},function(){
						if(ayar.effect=='slide'){
						$(this).children("ul").slideUp(ayar.sec);
						}
						if(ayar.effect=='fade'){
						$(this).children("ul").fadeOut(ayar.sec);
						}
						if(ayar.effect=='show'){
						$(this).children("ul").hide(ayar.sec);
						}
						});
					
					
												});
										}
})(jQuery);
