requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','pop_up_img'],function($,Dialog){
    $('.test-img1').on('click',function(){
        var dialog = new Dialog();
        dialog.open();
    });
    $('.test-img2').on('click',function(){
        var dialog = new Dialog({
        	style:'classical'
        });
        dialog.open();
    });
    $('.test-img3').on('click',function(){
        var dialog = new Dialog({
        	width:700,
        	height:450, 
        	imgSrc:'img.jpg',
        	style:'full',//样式full、classical
        	word:'这是一张图',//文字
        	wordColor:'#ff0',
        	// topColor:'#f8f8f8',//classical样式中的头部颜色
        	animated:true,//弹出时是否执行动画
        	animatedTime:0.6
        });
        dialog.open();
    });
});