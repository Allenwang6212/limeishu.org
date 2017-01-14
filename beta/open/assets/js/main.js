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
		} else {
			$("#nav").removeClass("how");
		}
		if (scrollHight >= (height * 1.4 - 48)) {
			$("#nav").removeClass("how");
			$("#nav").addClass("project");
		} else {
			$("#nav").removeClass("project");
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
