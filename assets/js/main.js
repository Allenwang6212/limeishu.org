$(document).ready(function () {
  var chrome = navigator.userAgent.search("Chrome") > -1;
  var safari = navigator.userAgent.search("Safari") > -1;
  var desktop = document.body.clientWidth > 1080 || document.documentElement.clientWidth > 1080;
  if (desktop) {
    if (chrome) {
      $("#nav>ul>li>ul").css('transform', 'translateX(-1px)')
    } else {
      $("#nav>ul>li>ul").css('transform', 'translateX(calc(-100% + 1px))')
    };
  };
});

// $(function () {
//   //scroll down
//   $(".scrolly").bind('click', function (event) {
//     event.preventDefault(); //先取消超連結原本預設動作
//     var $anchor = $(this);
//     $('body').animate({
//       scrollTop: $($anchor.attr('href')).offset().top
//     }, 1000, 'easeInOutQuint');
//   });
// });
//    traffic slide
$('.msg').hide();
$('.choose').click(function () {
  $('.msg').hide("slow");
  $('.choose').removeClass("active");
  var choosed = $(this).data('type');
  $('.msg[data-type=' + choosed + ']').show("slow");
  $('.choose[data-type=' + choosed + ']').addClass("active");
})
$('.choose[data-type=rail]').trigger("click");
$('.choose[data-type=info]').trigger("click");
$('.choose[data-type=source]').trigger("click");
$('.choose[data-type=self]').trigger("click");
$('#header>img#logo').click(function () {
  window.location = "https://limeishu.org.tw";
});
//news
$('.all-news').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1, // variableWidth:true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
//  navbar
$(document).ready(function () {
  $("#header>.toggle").click(function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $("#nav>ul>li").removeClass("active");
    $("#nav>ul>li").click(function () {
      $("#nav>ul>li").removeClass("active");
      $(this).toggleClass("active").removeClass("item");
    });
  });
});

//debug
function debug() {
  $.getJSON("/version.json", (data) => {
    var version = data.version;
    var update_time = data.update_time;
    var developer = data.developer;
    var best_browser = data.best_browser;
    var debugInfo = '<div class="debug" onclick="exit();"><p>Version: ' + version + '</p><p>Update Time: ' + update_time + '</p><p>Developer: ' + developer + '</p><p>Best Browser: ' + best_browser + '</p></div>';
    $("body").append(debugInfo);
  });
}

function exit() {
  $(".debug").hide();
}