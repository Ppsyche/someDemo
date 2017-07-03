requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'],function($){

    function Dialog(option){
        var _this = this;
        var defaultVal = {
            width:480,
            height:200, 
            color:'#5e9fa1',
            title:'这里是默认的标题文字',
            content:'这里是默认的提示文字,点击弹窗以外区域可关闭弹窗',
            yesBtn:'确定（默认）',
            noBtn:'取消（默认）',
            yes:function(){
                alert("你点击了确定按钮，这是默认的提示函数");
            },
            no:function(){
                alert("你点击了取消按钮，这是默认的提示函数");
            }
        };
        option = $.extend(defaultVal,option);
        this.$popBg = $('<div class="pop-bg"></div>')
        this.$pop = $('<div class="pop"></div>')
            .css({
                width:option.width,
                height:option.height,
                marginLeft:-option.width/2,
                marginTop:-option.height/2

            });
        this.$popHeard = $('<div class="pop-heard"></div>')
            .css('background',option.color);
        this.$popHeardP = $('<p>'+option.title+'</p>');
        this.$popBody = $('<div class="pop-body"></div>');
        this.$popBodyP = $('<p>'+option.content+'</p>');
        this.$btnBox = $('<div class="btn-box"></div>');
        this.$btnY = $('<input class="btn" type="button" value="'+option.yesBtn+'"/>')
            .css({background:option.color,'border-color':option.color})
            .on('click',function(){
                _this.colse();
                option.yes();
            });
        this.$btnN = $('<input class="btn" type="button" value="'+option.noBtn+'"/>')
            .on('click',function(){
                _this.colse();
                option.no();
            });
    }
    Dialog.prototype.open = function(){
        var _this = this;
        this.$popHeard.append(this.$popHeardP);
        this.$btnBox.append(this.$btnY);
        this.$btnBox.append(this.$btnN);
        this.$popBody.append(this.$popBodyP);
        this.$popBody.append(this.$btnBox);
        this.$pop.append(this.$popHeard);     
        this.$pop.append(this.$popBody);  
        this.$popBg.append(this.$pop);   
        $('body').append(this.$popBg);
        this.$pop.on('click',function(e){
            e.stopPropagation();
        });
        this.$popBg.on('click',function(e){
            if(!_this.$pop.is(e.target)){
                _this.colse();
            }           
        });
    }
    Dialog.prototype.colse = function(){
        this.$popBg.remove();
    }

    return Dialog;


})