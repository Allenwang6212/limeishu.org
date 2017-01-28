var footer = document.getElementById("footer");
var tel = '0226736077';
var fax = '0226736077';
var fb = 'https://www.facebook.com/limeishu.org/';
var mail = 'lms@limeishu.org';
var github = 'https://github.com/Limeishu/limeishu.org';
var year = new Date().getFullYear();

var content = '<ul class="icons"><li><a href="tel:' + tel + '" class="icon fa fa-phone" title="電話聯絡紀念館"><span class="label">Phone</span></a></li><li><a href="tel:' + fax + '" class="icon fa fa-fax" title="傳真給紀念館"><span class="label">FAX</span></a></li><li><a href="' + fb + '" class="icon fa fa-facebook" title="Li Mei-Shu Memorial Gallery (李梅樹紀念館)"><span class="label">Facebook</span></a></li><li><a href="' + mail + '" class="icon fa fa-envelope" title="寄信給紀念館"><span class="label">Email</span></a></li><li><a href="' + github + '" class="icon fa fa-github" title="取得紀念館網站原始碼"><span class="label">GitHub</span></a></li></ul><ul class="copyright"><li>&copy; ' + year + '. 李梅樹紀念館 Li Mei-shu Memorial Gallery.</li><li> Design: LIT Team</li><li>本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">創用 CC BY-NC-ND 4.0 國際授權條款</a>授權.</li><li>建議使用<a href="https://www.mozilla.org">Firefox瀏覽器</a></li></ul>';

footer.innerHTML = content;