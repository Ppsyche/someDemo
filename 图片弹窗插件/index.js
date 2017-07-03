requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'jquery.min',
        jqueryMobile: 'jquery.mobile-1.4.5.min'
    },
    shim: {
        jquery: {exports: 'jquery'},
        jqueryMobile: {deps: ['jquery']}
    }
});
require(['pop_up_img','jquery','jqueryMobile'],function(Dialog,$){
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
        	width:600,
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