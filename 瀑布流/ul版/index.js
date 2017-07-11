var lineHight = [0,0,0];
for (var i = 1; i <= 57; i++) {
	var $imgBox = $('<li class="img-box">'+i+'</li>');
	var $img = $('<img src="img/img'+i+'.jpg">');
	$imgBox.append($img);
	if(lineHight[0]<=lineHight[1]&&lineHight[0]<=lineHight[2]){
		$('.box ul').eq(0).append($imgBox);
		lineHight[0] = $('.box ul').eq(0).height();
	}else if(lineHight[1]<=lineHight[0]&&lineHight[1]<=lineHight[2]){
		$('.box ul').eq(1).append($imgBox);
		lineHight[1] = $('.box ul').eq(1).height();
	}else{
		$('.box ul').eq(2).append($imgBox);
		lineHight[2] = $('.box ul').eq(2).height();
	}
}
// var lineHight = [0,0,0];
// for (var i = 1; i <= 57; i++) {
// 	var aUl = document.getElementsByTagName('ul');
// 	var oLi = document.createElement("li");
// 	var oImg = document.createElement("img");
// 	oImg.src = "img/img"+i+".jpg";
// 	oLi.innerHTML=i;
// 	oLi.appendChild(oImg);

// 	if(lineHight[0]<=lineHight[1]&&lineHight[0]<=lineHight[2]){
// 		aUl[0].appendChild(oLi);
// 		lineHight[0] = aUl[0].offsetHeight;
// 	}else if(lineHight[1]<=lineHight[0]&&lineHight[1]<=lineHight[2]){
// 		aUl[1].appendChild(oLi);
// 		lineHight[1] = aUl[1].offsetHeight;
// 	}else{
// 		aUl[2].appendChild(oLi);
// 		lineHight[2] = aUl[2].offsetHeight;
// 	}
// }