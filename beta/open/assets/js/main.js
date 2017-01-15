$(function () {
	$(window).scroll(function () {
		var height = document.body.clientHeight;
		var scrollHight = $(this).scrollTop();
		if (scrollHight >= (height * 0.4 - 48)) {
			$("#nav").addClass("scrolled");
		} else {
			$("#nav").removeClass("scrolled");
		}
		if (scrollHight >= (height * 0.4 - 48)) {
			$("#nav").addClass("how");
			$(".goto").addClass("how");
		} else {
			$("#nav").removeClass("how");
			$(".goto").removeClass("how");
		}
		if (scrollHight >= (height * 1.4 - 48)) {
			$("#nav").removeClass("how");
			$(".goto").removeClass("how");
			$("#nav").addClass("project");
			$(".goto").addClass("project");
		} else {
			$("#nav").removeClass("project");
			$(".goto").removeClass("project");
		}
		if (scrollHight >= (height * 2.4 - 48)) {
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
	if (isNull=='') {
		$(patchsT[i]).css('background-image', 'url(' + defaultImg + ')');
	}
};

var buttonIcon = '<icon class="fa fa-arrow-circle-right" aria-hidden="true"></icon>';
var button = jQuery('a.button');
button.append(buttonIcon);