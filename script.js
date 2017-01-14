$(document).ready(function(){
	$("button").click(function(){
		setInterval(timer,1000);
	});
	var h=0,m=0,s=0;
	function timer(){
		s++;
		if(s>=60){m++;s%=60;}
		if(m>=60){h++;m%=60;}
		$(".h").text(h);
		$(".m").text(m);
		$(".s").text(s);
		}

});