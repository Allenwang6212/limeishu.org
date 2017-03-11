$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 3, 11),
		newYear = true;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " 天" + ( days==1 ? '':'' ) + " ｜ ";
			message += hours + " 小時" + ( hours==1 ? '':'' ) + " ｜ ";
			message += minutes + " 分鐘" + ( minutes==1 ? '':'' ) + " ｜ ";
			message += seconds + " 秒" + ( seconds==1 ? '':'' ) + " <br /><br />";
			
			if(days>=0){
				message += "2017梅樹月於3/11，邀請您一同共襄盛舉";
			}
			else {
				window.location = "https://msm.limeishu.org.tw";
			}
			
			note.html(message);
		}
	});
	
});
