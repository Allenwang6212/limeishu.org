$("#nav .toggle h1").hide();
//bar 
$(function () {
	$(window).scroll(function () {
		var height = document.body.clientHeight;
		var width = document.body.clientWidth;
		var scrollHight = $(this).scrollTop();
		if (width <= 1200 & width > 768) {
			var how = 0.6;
		} else {
			var how = 1;
		}
		if (width <= 1200 & width > 480) {
			var project = 1;
			var banner = 0.4;
			var coda = 5;
		} else if (width <= 480) {
			var project = 2.5;
			var banner = 0.4;
			var coda = 5;
		} else {
			var project = 1;
			var banner = 0.6;
			var coda = 48;
		}
		if (width <= 768 & width > 480) {
			var project = 1.2;
		}
		if (width <= 480) {
			if (scrollHight >= (height * banner - coda)) {
				$("#nav .toggle h1").show();
			} else {
				$("#nav .toggle h1").hide();
			}
		}
		if (scrollHight >= (height * banner - coda)) {
			$("#nav").addClass("scrolled");
		} else {
			$("#nav").removeClass("scrolled");
		}
		if (scrollHight >= (height * banner - coda)) {
			$("#nav").addClass("how");
			$(".goto").addClass("how");
		} else {
			$("#nav").removeClass("how");
			$(".goto").removeClass("how");
		}
		if (scrollHight >= (height * (how + banner) - coda)) {
			$("#nav").removeClass("how");
			$(".goto").removeClass("how");
			$("#nav").addClass("project");
			$(".goto").addClass("project");
		} else {
			$("#nav").removeClass("project");
			$(".goto").removeClass("project");
		}
		if (scrollHight >= (height * (how + project + banner) - coda)) {
			$("#nav").removeClass("project");
			$(".goto").removeClass("project");
			$("#nav").addClass("team");
			$(".goto").addClass("team");
		} else {
			$("#nav").removeClass("team");
			$(".goto").removeClass("team");
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
		aContent[i].removeAttribute("href");
	}
}
