$(function () {
	$(window).scroll(function () {
		var height = document.body.scrollHeight;
		var scrollHight = $(this).scrollTop();
		if (scrollHight >= (height * 0.4 - 48)) {
			$("#nav").addClass("scrolled");
		} else {
			$("#nav").removeClass("scrolled");
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
