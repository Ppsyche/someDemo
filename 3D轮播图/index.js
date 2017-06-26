$(function(){
	var total=0;
	var items=$(".items");
	var flag=true;
	$(".body").hover(function(){
    	$(".btn").show();
	},function(){
    	$(".btn").hide();
	});
    $(".right_btn").on('click',function(){
    	if(flag){
    		total+=90;
    		flag=false;
    		items.each(function(index){
    			items.eq(index).css({
    				'transform':'rotateX('+total+'deg)',
    				'transition':'all 1s '+index*200+'ms'
    			});
    		})
    	}
    });

	$(".left_btn").on('click',function(){
		if(flag){
			total-=90;
			flag=false;
			items.each(function(index){
				items.eq(index).css({
					'transform':'rotateX('+total+'deg)',
					'transition':'all 1s '+index*200+'ms'
				});
			})
		}
	});
	items.last().on('transitionend',function (argument) {
		flag = true;
	});
})