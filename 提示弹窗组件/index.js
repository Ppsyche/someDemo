requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','pop_up'],function($,Dialog){
    $('.button1').on('click',function(){
        var dialog = new Dialog();
        dialog.open();
        
    });
    $('.button2').on('click',function(){
        var dialog = new Dialog({
            width:600,
            height:300,
            content:'我改了宽高'
        });
        dialog.open();
        
    });
    $('.button3').on('click',function(){
        var dialog = new Dialog({
            color:'#0ff',
            content:'我改了颜色'
        });
        dialog.open();
        
    });
    $('.button4').on('click',function(){
        var dialog = new Dialog({
            width:500,
            height:250,
            color:'#f0f',
            title:'温馨提示',
            content:'这是弹窗组件测试，点击确定按钮下出现ok，点击取消什么也没有',
            yesBtn:'确定',
            noBtn:'取消',
            yes:function(){
                $('.ok').text('ok').css('font-size','20px');
            },
            no:function(){

            }
        });
        dialog.open();
        
    });

});