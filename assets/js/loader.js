$(document).ready(function () {
    font();
    var loader = '<div id="sketch"><div class="load load-3"><div class="loading"><div class="dot-1"></div><div class="dot-2"></div><div class="dot-3"></div><div class="dot-4"></div><div class="dot-5"></div><div class="dot-6"></div><div class="dot-7"></div><div class="dot-8"></div></div><h1 class="title">Loading...</h1></div></div>';
    $("body").append(loader);
    $(window).load(function () {
        $("#sketch").hide();
        icon();
    });
});

var icon = function () {
    var cb = function () {

        var b = document.createElement('link');
        b.rel = 'stylesheet';
        b.href = '/assets/css/font-awesome.min.css';

        var z = document.getElementsByTagName('head')[0];
        z.parentNode.insertBefore(b, z);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);
};

var font = function () {
    var cb = function () {
        var a = document.createElement('link');
        a.rel = 'stylesheet';
        a.href = '/assets/css/font.css';

        var z = document.getElementsByTagName('head')[0];
        z.parentNode.insertBefore(a, z);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);
};