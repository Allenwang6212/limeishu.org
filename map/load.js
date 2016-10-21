$(document).ready(function(){
$.get("http://aporee.org/maps/work/?clat=25.088242&clng=121.250439&z=13&m=satellite8",function(data){ //初始將a.html include div#iframe
$("#iframe").html(data);
});
$(function(){
$('.list-side li').click(function() {
	// 找出 li 中的超連結 href(#id)
	var $this = $(this),
	_clickTab = $this.find('a').attr('href'); // 找到連結a中的href標籤值
	if("-1"==_clickTab.search("http://")){ //不為http://執行下列程式
	$.get(_clickTab,function(data){
	$("#iframe").html(data);
	});
	return false
	}
})
})
});
