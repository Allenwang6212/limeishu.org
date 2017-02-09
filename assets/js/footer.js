var footer = document.getElementById("footer");
var tel = '0226736077';
var fax = '0226736077';
var fb = 'https://www.facebook.com/limeishu.org/';
var mail = 'lms@limeishu.org';
var github = 'https://github.com/Limeishu/limeishu.org';
var year = new Date().getFullYear();
var lang1 = '/tw';
var lang2 = '/en';
var lang3 = '/jp';
var URL = document.URL;


var content1 = '<ul class="icons"><li><a href="tel:' + tel + '" class="icon fa fa-phone" title="電話聯絡紀念館"><span class="label">Phone</span></a></li><li><a href="tel:' + fax + '" class="icon fa fa-fax" title="傳真給紀念館"><span class="label">FAX</span></a></li><li><a href="' + fb + '" class="icon fa fa-facebook" title="Li Mei-Shu Memorial Gallery (李梅樹紀念館)"><span class="label">Facebook</span></a></li><li><a href="' + mail + '" class="icon fa fa-envelope" title="寄信給紀念館"><span class="label">Email</span></a></li><li><a href="' + github + '" class="icon fa fa-github" title="取得紀念館網站原始碼"><span class="label">GitHub</span></a></li></ul><ul class="copyright"><li>&copy; ' + year + '. 李梅樹紀念館 Li Mei-shu Memorial Gallery.</li><li> Design: LIT Team</li><li>本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC BY-NC-ND 4.0 國際授權條款</a>授權.</li></ul>';

var content2 = '<ul class="icons"><li><a href="tel:' + tel + '" class="icon fa fa-phone" title="Call US"><span class="label">Phone</span></a></li><li><a href="tel:' + fax + '" class="icon fa fa-fax" title="傳真給紀念館"><span class="label">FAX</span></a></li><li><a href="' + fb + '" class="icon fa fa-facebook" title="Li Mei-Shu Memorial Gallery (李梅樹紀念館)"><span class="label">Facebook</span></a></li><li><a href="' + mail + '" class="icon fa fa-envelope" title="寄信給紀念館"><span class="label">Email</span></a></li><li><a href="' + github + '" class="icon fa fa-github" title="取得紀念館網站原始碼"><span class="label">GitHub</span></a></li></ul><ul class="copyright"><li>&copy; ' + year + '. 李梅樹紀念館 Li Mei-shu Memorial Gallery.</li><li> Design: LIT Team</li><li>本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC BY-NC-ND 4.0 ISO</a>授權.</li></ul>';

var content3 = '<ul class="icons"><li><a href="tel:' + tel + '" class="icon fa fa-phone" title="電話聯絡紀念館"><span class="label">Phone</span></a></li><li><a href="tel:' + fax + '" class="icon fa fa-fax" title="傳真給紀念館"><span class="label">FAX</span></a></li><li><a href="' + fb + '" class="icon fa fa-facebook" title="Li Mei-Shu Memorial Gallery (李梅樹紀念館)"><span class="label">Facebook</span></a></li><li><a href="' + mail + '" class="icon fa fa-envelope" title="寄信給紀念館"><span class="label">Email</span></a></li><li><a href="' + github + '" class="icon fa fa-github" title="取得紀念館網站原始碼"><span class="label">GitHub</span></a></li></ul><ul class="copyright"><li>&copy; ' + year + '. 李梅樹紀念館 Li Mei-shu Memorial Gallery.</li><li> Design: LIT Team</li><li>本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC BY-NC-ND 4.0 ふたなり</a>授權.</li></ul>';

if (URL.indexOf(lang1 + '/') > 0) {
    footer.innerHTML = content1;
} else if (URL.indexOf(lang2 + '/') > 0) {
    footer.innerHTML = content2;
} else if (URL.indexOf(lang3 + '/') > 0) {
    footer.innerHTML = content3;
}