var header = document.getElementById("header");
var logo = '/images/Icon/Logo/Logo.png';
var lang1 = '/tw';
var lang2 = '/en';
var lang3 = '/jp';
var URL = document.URL;

var content_TW = '<h1 id="logo">李梅樹紀念館</h1><img id="logo" src="' + logo + '" alt=""><span class="toggle"><i class="fa fa-bars" aria-hidden="true"></i></span><nav id="nav"><ul><li><a href="#">文化活動</a><ul><li><a href="' + lang1 + '/culture/news.html">最新消息</a></li><li><a href="' + lang1 + '/culture/reports.html">相關報導</a></li><li><a href="' + lang1 + '/culture/scenery.html">周邊景點</a></li><li><a href="/msm">梅樹月</a></li><li><a href="' + lang1 + '/culture/tempelate.html">三峽祖師廟</a></li></ul></li><li><a href="#">關於我們</a><ul><li><a href="' + lang1 + '/about/memorial.html">關於紀念館</a></li><li><a href="' + lang1 + '/about/volunteers.html">工作團隊</a></li><li><a href="' + lang1 + '/about/donation.html">支持我們</a></li></ul></li><li><a href="#">李梅樹</a><ul><li><a href="' + lang1 + '/introduction/limei-shu.html">畫家介紹</a></li><li><a href="' + lang1 + '/introduction/history.html">年度記事</a></li></ul></li><li><a href="#">數位館藏</a><ul><li><a href="https://online.limeishu.org.tw">線上美術館</a></li><li><a href="' + lang1 + '/digitalCollections/reference.html">文獻資料</a></li></ul></li><li><a href="https://open.limeishu.org.tw">開源 x 文史</a></li><li><a href="/">語言選擇</a><ul><li><a href="/tw/">中文</a></li><li><a href="https://old.limeishu.org.tw/anglais/anglais.htm">English</a></li><li><a href="/jp/">日本語</a></li></ul></li></ul></nav>';

var content_EN = '<h1 id="logo">Li Mei-shu Gallery</h1><img id="logo" src="' + logo + '" alt=""><span class="toggle"><i class="fa fa-bars" aria-hidden="true"></i></span><nav id="nav"><ul><li><a href="#">Activities</a><ul><li><a href="' + lang2 + '/culture/news.html">News</a></li><li><a href="' + lang2 + '/culture/reports.html">Reports</a></li><li><a href="' + lang2 + '/culture/scenery.html">Attractions</a></li><li><a href="/msm">Mei-shu month</a></li><li><a href="' + lang2 + '/culture/tempelate.html">Sanxia Master Temple</a></li></ul></li><li><a href="#">About</a><ul><li><a href="' + lang2 + '/about/memorial.html">Gallery</a></li><li><a href="' + lang2 + '/about/volunteers.html">Core workforce</a></li><li><a href="' + lang2 + '/about/donation.html">Donation</a></li></ul></li><li><a href="#">Li mei-shu</a><ul><li><a href="' + lang2 + '/introduction/limei-shu.html">Introduction</a></li><li><a href="' + lang2 + '/introduction/history.html">History</a></li></ul></li><li><a href="#">On the Web</a><ul><li><a href="https://online.limeishu.org.tw">Portfolio</a></li><li><a href="' + lang2 + '/digitalCollections/reference.html">Literature</a></li></ul></li><li><a href="https://open.limeishu.org.tw">Open Source x Culture</a></li><li><a href="/">Language</a><ul><li><a href="/tw/">中文</a></li><li><a href="https://old.limeishu.org.tw/anglais/anglais.htm">English</a></li><li><a href="/jp/">日本語</a></li></ul></li></ul></nav>';

var content_JP = '<h1 id="logo">李梅樹ギャラリー</h1><img id="logo" src="' + logo + '" alt=""><span class="toggle"><i class="fa fa-bars" aria-hidden="true"></i></span><nav id="nav"><ul><li><a href="#">アクティビティ</a><ul><li><a href="' + lang3 + '/culture/news.html">最新ニュース</a></li><li><a href="' + lang3 + '/culture/reports.html">関連報道</a></li><li><a href="' + lang3 + '/culture/scenery.html">観光名所</a></li><li><a href="/msm">プラム月</a></li><li><a href="' + lang3 + '/culture/tempelate.html">三峡の寺</a></li></ul></li><li><a href="#">私たちについて</a><ul><li><a href="' + lang3 + '/about/memorial.html">ギャラリーについて</a></li><li><a href="' + lang3 + '/about/volunteers.html">コアチーム</a></li><li><a href="' + lang3 + '/about/donation.html">サポートしています</a></li></ul></li><li><a href="#">李梅樹</a><ul><li><a href="' + lang3 + '/introduction/limei-shu.html">アーティスト</a></li><li><a href="' + lang3 + '/introduction/history.html">歴史</a></li></ul></li><li><a href="#">デジタルコレクション</a><ul><li><a href="https://online.limeishu.org.tw">オンラインアートギャラリー</a></li><li><a href="' + lang3 + '/digitalCollections/reference.html">ファイルデータ</a></li></ul></li><li><a href="https://open.limeishu.org.tw">オープンソース x 歴史</a></li><li><a href="/">言語の選択</a><ul><li><a href="/tw/">中文</a></li><li><a href="https://old.limeishu.org.tw/anglais/anglais.htm">English</a></li><li><a href="/jp/">日本語</a></li></ul></li></ul></nav>';

if (URL.indexOf(lang1 + '/') > 0) {
    header.innerHTML = content_TW;
} else if (URL.indexOf(lang2 + '/') > 0) {
    header.innerHTML = content_EN;
} else if (URL.indexOf(lang3 + '/') > 0) {
    header.innerHTML = content_JP;
}

var chrome = navigator.userAgent.search("Chrome") > -1;
var desktop = document.body.clientWidth > 1080 || document.html.clientWidth > 1080;
if (desktop) {
    if (chrome) {
        $("#nav>ul>li>ul").css('transform', 'translateX(-1px)')
    } else {
        $("#nav>ul>li>ul").css('transform', 'translateX(calc(-100% + 1px))')
    }
}