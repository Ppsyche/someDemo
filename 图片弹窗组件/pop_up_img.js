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
            width:500,
            height:400, 
            imgSrc:'img.jpg',
            style:'full',//样式full、classical
            word:'图片',//文字
            wordColor:'#333',
            topColor:'#f8f8f8',//classical样式中的头部颜色
            animated:true,//弹出时是否执行动画
            animatedTime:0.3
        };
        option = $.extend(defaultVal,option);
        this.$style = option.style;
        this.$popImgBg = $('<div class="pop-img-bg"></div>');
        this.$pop = $('<div class="pop"></div>')
            .css({
                width:option.width,
                height:option.height,
                marginLeft:-option.width/2,
                marginTop:-option.height/2,
            });
        this.$colse = $('<span class="close">&times;</span>')
            // .css('color',option.wordColor)
            .on('click',function(){
                _this.colse();
            });
        this.$popImg = $('<img class="pop-img" src="'+option.imgSrc+'" alt="'+option.word+'">');
        this.$title = $('<span class="title">'+option.word+'</span>')
            .css('color',option.wordColor);
        this.$popTop = $('<div class="pop-top"></div>')
            .css('background',option.topColor);
        this.$popBody = $('<div class="pop-body">');
        if(option.animated){
            this.$pop.css({
                '-webkit-animation-name': 'zoom',
                '-webkit-animation-duration': option.animatedTime + 's',
                'animation-name': 'zoom',
                'animation-duration': option.animatedTime + 's'
            });
        }
    }
    Dialog.prototype.open = function(){
        if(this.$style == 'full'){
            this.$pop.append(this.$colse);
            this.$pop.append(this.$popImg);
            this.$pop.append(this.$title);
        }else if(this.$style == 'classical'){
            this.$popTop.append(this.$colse);
            this.$popTop.append(this.$title);
            this.$popBody.append(this.$popImg);
            this.$pop.append(this.$popTop);
            this.$pop.append(this.$popBody);
        }
        this.$popImgBg.append(this.$pop);
        $('body').append(this.$popImgBg);
    }
    Dialog.prototype.colse = function(){
        this.$popImgBg.remove();
    }
    return Dialog;
})