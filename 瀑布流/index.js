var imgNum = 4//一行摆几张图
var lineHight = new Array(imgNum);//每排的高度
var minHeight = 0;//高度最小的是哪排
var left = $('.box li').outerWidth(true);//imgBox的宽包括width,padding,border,margin
console.log(left);
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
// var aa = [1,1,1,1,1,1,1,1,1];
// aa.fill(0,3);
// console.log(aa);