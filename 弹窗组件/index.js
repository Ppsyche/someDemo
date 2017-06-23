requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','pop_up'],function($,Dialog){
    $('.button').on('click',function(){
        var dialog = new Dialog({
            width:500,
            height:200,
            // color:'#0ff',
            title:'提示',
            content:'提示内容',
            yesBtn:'确定',
            noBtn:'取消'
            // yes:function(){

            // },
            // no:function(){

            // }
        });
        dialog.open();
    });
});