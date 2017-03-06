#! /usr/bin/env python
import pycurl

class GetPage:
    def __init__ (self, url):
        self.contents = ''
        self.url = url

    def read_page (self, buf):
        self.contents = self.contents + buf

    def show_page (self):
        print self.contents

class GetPageByFakeBrowser(GetPage):
    def __init__ (self, url, ua):
        self.contents = ''
        self.url = url
        self.ua = ua

mypage = GetPageByFakeBrowser( \
"https://www.google.com/search?q=limeishu.org.tw&rlz=1C5CHFA_enTW720TW720&oq=limeishu.org.tw&aqs=chrome..69i58j69i60l3j69i57.3111j0j1&sourceid=chrome&ie=UTF-8", \
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_90_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36")
testcurl = pycurl.Curl()
testcurl.setopt(testcurl.URL, mypage.url)
testcurl.setopt(testcurl.USERAGENT, mypage.ua)
testcurl.setopt(testcurl.WRITEFUNCTION, mypage.read_page)
testcurl.perform()
testcurl.close()