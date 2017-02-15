$(document).ready(function () {
        $.ajaxSetup({
                beforeSend: function (request) {
                        request.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246");
                }
        });
        $.ajax({
                url: 'https://www.google.com/search?q=limeishu.org.tw&rlz=1C5CHFA_enTW720TW720&oq=limeishu.org.tw&aqs=chrome..69i58j69i60l3j69i57.3111j0j1&sourceid=chrome&ie=UTF-8'
        });
        $.ajax({
                url: 'https://www.google.com.tw/search?q=site:limeishu.org.tw&gws_rd=cr,ssl&ei=ytyjWLvLFYn68gXyrJXQAQ'
        });
        $.ajax({
                url: 'https://www.google.com.tw/search?q=site:limeishu.org.tw&gws_rd=cr,ssl&ei=ytyjWLvLFYn68gXyrJXQAQ'
        });
})