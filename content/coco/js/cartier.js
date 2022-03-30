$(document).ready(function(){
	$('article').mouseenter(function(){
		$(this).stop().animate({'width':'60%'},500);
		$(this).find('video').get(0).play();
	});
	$('article').mouseleave(function(){
		$(this).stop().animate({'width':'12%'},100);
	});
		
	
});