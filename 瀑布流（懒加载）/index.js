$("img").load(function(){
	var imgNum = 4//一行摆几张图
	var lineHight = new Array(imgNum);//每排的高度
	var minHeight = 0;//高度最小的是哪排
	var left = $('.box li').outerWidth(true);//imgBox的宽包括width,padding,border,margin
	// console.log(left);
	lineHight.fill(0,0,imgNum);
	// while(imgNum--){lineHight[imgNum-1]=0}
	for (var i = 0; i < $(".box li").length; i++){
		minHeight = 0;
		for(j=1; j<lineHight.length; j++){
			minHeight = lineHight[minHeight]>lineHight[j]?j:minHeight;
		}
		$('.box li').eq(i).css({
			"top":lineHight[minHeight],
			"left":left*minHeight
		});
		lineHight[minHeight] += $('.box li').eq(i).outerHeight(true);
	}
});
showImg();
window.onscroll=function(){
	showImg();
}
function showImg(){
	$("img").each(function(){
		if($(this).attr('isLoaded')){
			return;
		}
		var scrollH = $(window).scrollTop(),
		       winH = $(window).height(),
		        top = $(this).offset().top;
		if(top < winH + scrollH){
			$(this).attr('src', $(this).attr('data-img'));
			$(this).attr('isLoaded', true);
		}		
	})
}