$("#nav .toggle h1").hide();
//bar 
$(function () {
	$(window).scroll(function () {
		var height = document.body.clientHeight;
		var width = document.body.clientWidth;
		var scrollHight = $(this).scrollTop();
		var barStyle = ['what', 'intro']
		if (scrollHight / (height - 48) >= 1) {
			$("#nav").addClass("scrolled");
			$("#nav .toggle h1").show();
		} else {
			$("#nav").removeClass("scrolled");
			$("#nav .toggle h1").hide();
		}
		for (var i = 0; i < barStyle.length; ++i) {
			if ((scrollHight / (height) >= i + 1) && (scrollHight / (height) < i + 2)) {
				$("#nav").addClass(barStyle[i]);
			} else {
				$("#nav").removeClass(barStyle[i]);
			}
		}
	});
});
//nav
$(document).ready(function () {
	$(".toggle").click(function () {
		$(this).toggleClass("active");
		$(".nav").slideToggle();
		$("#nav").toggleClass("active");
	});
});
//scrolly
$(function () {
	//scroll down
	$(".scrolly").bind('click', function (event) {
		event.preventDefault(); //先取消超連結原本預設動作
		var $anchor = $(this);
		$('body').animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutQuint');
	});
});
//member image rewrite
var defaultImg = 'assets/css/images/member/default.png'
var itemsP = jQuery('#project>.container>.card');
var patchsP = jQuery('#project>.container>.card>.image');
for (var i = 0; i < itemsP.length; ++i) {
	$(patchsP[i]).css('background-image', 'url(' + $(itemsP[i]).find('img').attr('src') + ')');
};
var itemsT = jQuery('#team>.container>.member>.pic');
var patchsT = jQuery('#team>.container>.member>.pic>.image');
for (var i = 0; i < itemsT.length; ++i) {
	$(patchsT[i]).css('background-image', 'url(' + $(itemsT[i]).find('img').attr('src') + ')');
	var isNull = $(itemsT[i]).find('img').attr('src');
	if (isNull == '') {
		$(patchsT[i]).css('background-image', 'url(' + defaultImg + ')');
	}
};
//button
var buttonIcon = '<icon class="fa fa-angle-right" aria-hidden="true"></icon>';
var button = jQuery('a.button');
button.append(buttonIcon);

//a tage rewrite
var aContent = jQuery("a");
for (var i = 0; i < aContent.length; ++i) {
	if (aContent[i].getAttribute("href") == '#') {
		aContent[i].removeAttribute("href").bind('click', function () {
			event.preventDefault();
		});
	}
}

$(document).ready(function () {
	var width = document.body.clientWidth;
	var display = $(".map>.display");
	var pointNum = $(".map>.display>div").length;
	var displayWidth = pointNum * (width / 4);
	var desktop = width > 768;
	if (desktop) {
		display.css('width', displayWidth);
	}
	var clickEvent = 0;
	$(".map>.right").click( function () {
		clickEvent = clickEvent - 1;
		display.css('transform','translateX('+((width / 4) * clickEvent).toString()+'px)');
		console.log('translateX('+((width / 3) * clickEvent).toString()+'px)');
	});
	$(".map>.left").click( function () {
		clickEvent = clickEvent + 1;
		display.css('transform','translateX('+((width / 4) * clickEvent).toString()+'px)');
		console.log('translateX('+((width / 3) * clickEvent).toString()+'px)');
	});
});