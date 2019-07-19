/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
$(document).ready(function(){
});
function uno(){
	var word = document.getElementById('word').value;
	var link = "http://localhost/codebydom/resources/data/script"+document.getElementById('audioselect').value+".json"
	$.ajax({
	    type: "GET",
	    url: link,
	    dataType:"json",
	    success: function(responseData, status) {
	      var li = '';
	      $.each(responseData, function(i, item) {
	      		if(responseData[i][0].toLowerCase()==word.toLowerCase()){
	      				li +="<li class='time'>"+responseData[i][1]+"</li>";	
	      		};
	      	});
	      	tell(li);
		}
	});
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function dos(){
	var words = document.getElementById('word').value.split(" ");
	var link = "http://localhost/codebydom/resources/data/script"+document.getElementById('audioselect').value+".json"
	$.ajax({
	    type: "GET",
	    url: link,
	    dataType:"json",
	    success: function(responseData, status) {
	      var li = '';
	      $.each(responseData, function(i, item) {
	      		if(responseData[parseInt(i)+1]!=undefined){
	      			if(responseData[parseInt(i)+1][0].toLowerCase()==words[1].toLowerCase()&&responseData[i][0].toLowerCase()==words[0].toLowerCase()){
	      				li +="<li class='time'>"+responseData[i][1]+"</li>";
	      		}
	      		};
	      	});
	      	tell(li);
		}
	});
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function tre(){
	var words = document.getElementById('word').value.split(" ");
	var link = "http://localhost/codebydom/resources/data/script"+document.getElementById('audioselect').value+".json"
	$.ajax({
	    type: "GET",
	    url: link,
	    dataType:"json",
	    success: function(responseData, status) {
	      var li = '';
	      $.each(responseData, function(i, item) {
	      		if(responseData[parseInt(i)+2]!=undefined){
	      			if(responseData[parseInt(i)+2][0].toLowerCase()==words[2].toLowerCase()&&responseData[parseInt(i)+1][0].toLowerCase()==words[1].toLowerCase()&&responseData[i][0].toLowerCase()==words[0].toLowerCase()){
	      				li +="<li class='time'>"+responseData[i][1]+"</li>";
	      		}
	      		};
	      	});
	      	tell(li);
		}
	});
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function qua(){
	var words = document.getElementById('word').value.split(" ");
	var link = "http://localhost/codebydom/resources/data/script"+document.getElementById('audioselect').value+".json"
	$.ajax({
	    type: "GET",
	    url: link,
	    dataType:"json",
	    success: function(responseData, status) {
	      var li = '';
	      $.each(responseData, function(i, item) {
	      		if(responseData[parseInt(i)+3]!=undefined){
	      			if(responseData[parseInt(i)+3][0].toLowerCase()==words[3].toLowerCase()&&responseData[parseInt(i)+2][0].toLowerCase()==words[2].toLowerCase()&&responseData[parseInt(i)+1][0].toLowerCase()==words[1].toLowerCase()&&responseData[i][0].toLowerCase()==words[0].toLowerCase()){
	      				li +="<li class='time'>"+responseData[i][1]+"</li>";
	      		}
	      		};
	      	});
	      	tell(li);
		}
	});
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function cin(){
	var words = document.getElementById('word').value.split(" ");
	var link = "http://localhost/codebydom/resources/data/script"+document.getElementById('audioselect').value+".json"
	$.ajax({
	    type: "GET",
	    url: link,
	    dataType:"json",
	    success: function(responseData, status) {
	      var li = '';
	      $.each(responseData, function(i, item) {
	      		if(responseData[parseInt(i)+4]!=undefined){
	      			if(responseData[parseInt(i)+4][0].toLowerCase()==words[4].toLowerCase()&&responseData[parseInt(i)+3][0].toLowerCase()==words[3].toLowerCase()&&responseData[parseInt(i)+2][0].toLowerCase()==words[2].toLowerCase()&&responseData[parseInt(i)+1][0].toLowerCase()==words[1].toLowerCase()&&responseData[i][0].toLowerCase()==words[0].toLowerCase()){
	      				li +="<li class='time'>"+responseData[i][1]+"</li>";
	      		}
	      		};
	      	});
	      	tell(li);
		}
	});
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function tell(li){
	if (li!=''){
	    $("#word").css('border','2px solid #ccc');
	    $("#hiddenlist").html(li);
	    $("#next").removeClass("hidden");
		$("#next").addClass("toclick");
	    nexttime();
		} else{
			$("#word").css('border','solid 2px #ff1a1a');
	};
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function nexttime(){
	if (!$('#video').hasClass("vv")){
	if (parseInt(document.getElementById("word").name)==document.getElementsByClassName("time").length-1){
		document.getElementById("audi").play();
		$('#control').removeClass("pause");
		document.getElementById("pp").innerHTML="pause_circle_outline"
		$("#next").addClass("hidden");
		document.getElementById("audi").currentTime=document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value;
	} else {
		document.getElementById("audi").play();
		$('#control').removeClass("pause");
		document.getElementById("pp").innerHTML="pause_circle_outline"
	 	document.getElementById("audi").currentTime=document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value;
	 	document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
	 } 
	} else {
		seek();
	}
}
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function getword(){
	document.getElementById("hiddenlist").innerHTML="";
	document.getElementById("word").name="0"
	if (document.getElementById('word').value.split(" ").length==1){
		uno();
	} else if (document.getElementById('word').value.split(" ").length==2){
		dos();
	} else if (document.getElementById('word').value.split(" ").length==3){
		tre();
	} else if (document.getElementById('word').value.split(" ").length==4){
		qua();
	} else if (document.getElementById('word').value.split(" ").length==5){
		cin();
	};
};
function back(){
	document.getElementById("audi").currentTime-=parseInt(document.getElementById("skipy").value)
}
function skip(){
	document.getElementById("audi").currentTime+=parseInt(document.getElementById("skipy").value)
}
function pp(){
	if (!$('#control').hasClass("pause")){
		document.getElementById("audi").pause()
		$('#control').addClass("pause")
		document.getElementById("pp").innerHTML="play_circle_outline"
	} else {
		document.getElementById("audi").play()
		$('#control').removeClass("pause");
		document.getElementById("pp").innerHTML="pause_circle_outline"
	}
}
var tc = setInterval(timecheck ,300);
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '500',
  width: '900',
  videoId: '0JUN9aDxVmI',
	});
	}
function seek(){
	if (parseInt(document.getElementById("word").name)==document.getElementsByClassName("time").length-1){
	player.seekTo(Math.floor(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value));
	console.log("sneeky");
	player.playVideo();
	} else {
	player.seekTo(Math.floor(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value));
	document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
	player.playVideo();
	}
}
function timecheck() { 
	if (!$('#video').hasClass("vv")){
	    var hr = Math.floor(document.getElementById("audi").currentTime/3600);
		var min = Math.floor(document.getElementById("audi").currentTime/60);
		var sec = Math.floor(document.getElementById("audi").currentTime%60);
		var dhr = Math.floor(document.getElementById("audi").duration/3600);
		var dmin = Math.floor(document.getElementById("audi").duration/60);
		var dsec = Math.floor(document.getElementById("audi").duration%60);
		if (min>=60){
			min=String(min-60);
		}
		if (sec<10){
			sec="0"+String(sec);
		} 
		if (min<10){;
			min="0"+String(min);
		};
		if (hr<10){
			hr="0"+String(hr);
		};
		if (dmin>=60){
			dmin=String(dmin-60);
		}
		if (dsec<10){
			dsec="0"+String(dsec);
		} 
		if (dmin<10){;
			dmin="0"+String(dmin);
		};
		if (dhr<10){
			dhr="0"+String(dhr);
		};
		var dur = dhr+":"+dmin+":"+dsec
		document.getElementById("atime").innerHTML=hr+":"+min+":"+sec+" | "+dur;
		if ($('li').hasClass("time")&&document.getElementById("word").name!="Done"){
			if (document.getElementById("audi").currentTime>parseInt(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML)){
				if (parseInt(document.getElementById("word").name)>=document.getElementsByClassName("time").length-1){
					document.getElementById("word").name="Done"
					$("#next").addClass("hidden");
				} else {
					document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
				}
		}
		}
	} else {
		if ($('li').hasClass("time")&&document.getElementById("word").name!="Done"){
			if (player.getCurrentTime()>parseInt(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML)){
				if (parseInt(document.getElementById("word").name)>=document.getElementsByClassName("time").length-1){
					document.getElementById("word").name="Done"
					$("#next").addClass("hidden");
				} else {
					document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
					console.log("axed");
		}
		}
		}
	}
}
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function p1(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/jnjq1.mp3";
		document.getElementById("audioselect").value="jnj";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p1").innerHTML
		document.getElementById("bc").innerHTML="<span>Business Case:</span> Users can search through the words spoken in the call for the exact time when important financial figures or industry topics are brought up. This is great time-saver for industry, market and company performance research."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span> New Brunswick, N.J. (April 18, 2017) – Johnson & Johnson (NYSE: JNJ) today announced sales of $17.8 billion for the first quarter of 2017, an increase of 1.6% as compared to the first quarter of 2016. Operational sales results increased 2.0% and the negative impact of currency was 0.4%. Domestic sales increased 0.6%. International sales increased 2.8%, reflecting operational growth of 3.6% and a negative currency impact of 0.8%. Excluding the net impact of acquisitions and divestitures, on an operational basis, worldwide sales increased 1.2%, domestic sales decreased 0.7% and international sales increased 3.4%."
	})
}
function p2(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/pickem.mp3";
		document.getElementById("audioselect").value="2";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p2").innerHTML+"<i id='exp' class='material-icons'>explicit</i>"
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the podcast to find the picks for certain teams and games, as well as to see what they put as their lock of the weekend and who to watch for an upset."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span> Barstool Pick Em - College Bowl Games With Intern Winner Blackjack Fletcher, going through all the winners and locks for this weekend’s upcoming College Bowl Games. Winner Blackjack Fletcher who has been on a hot streak gives us his picks out for free. You would be losing money if you didn't listen to this podcast."
	})
}
function p3(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/rundown.mp3";
		document.getElementById("audioselect").value="4";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p3").innerHTML+"<i id='exp' class='material-icons'>explicit</i>"
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the podcast to find topics the Barstool media members talk about that the user wants to specifically hear about."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span>  Barstool Rundown- El Pres and Big Cat talk about the hottest topics from the internet on Dec 21. 2017. Topics include an NFL executive getting fired, Mark Wahlberg and Apple admitting they scammed everyone who ever had an iPhone."
	})
}
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function p4(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/algoharvard.mp3";
		document.getElementById("audioselect").value="lec";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p4").innerHTML
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the lecture for topics, algorithms, or vocabulary that the student needs to listen to again to fully understand."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span> Advanced Algorithms (COMPSCI 224), Lecture 1 - Harvard University - Logistics, course topics, word RAM, predecessor, van Emde Boas, y-fast tries are all topics covered in this first lecture."
	})
}
function p5(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/nytdaily.mp3";
		document.getElementById("audioselect").value="nyt";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p5").innerHTML
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the podcast for the most relevant social topics talked about in the world today that the user wants to hear about."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span> George Papadopoulos drew worldwide attention when he was identified as the low-ranking foreign policy adviser to the Trump campaign who got in over his head with Russia and inadvertently set off the Mueller investigation. But another foreign policy adviser, Carter Page, also drew the attention of the F.B.I.: Why did his story end so differently? Guest: Jason Zengerle, a contributing writer for The New York Times Magazine. For more information on today’s episode, visit nytimes.com/thedaily."
	})
}
function agree(){
	if (document.getElementById("agreement").name=="yes"){
	document.getElementById("agreement").name="no";
	} else {
		document.getElementById("agreement").name="yes"
	};
	if (document.getElementById("agreement").name=="yes"){
		$("#contd").removeClass("hidden")
	};
	if (document.getElementById("agreement").name=="no"){
		$("#contd").addClass("hidden")
	};
}
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function uncheck(){
	if (document.getElementById("agreement").name=="yes"){
		$("#check").click();
	}
}
function failagree(){
	$("#contd").addClass("hidden")
	$("#agreement").addClass("hidden")
	$("#playa").removeClass("hidden")
	$("#vplaya").removeClass("hidden")
	$("#dscript").removeClass("hidden")
}
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
});
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/
function v1(){
	player.loadVideoById("OLHdzLpMg-s");
	document.getElementById("audioselect").value="jre"
};
function v2(){
	player.loadVideoById("0JUN9aDxVmI");
	document.getElementById("audioselect").value="lec"
};
function v3(){
	// document.getElementById("utube").src="https://www.youtube.com/embed/TJUhicWfLxc"
	player.loadVideoById("TJUhicWfLxc")
	document.getElementById("audioselect").value="und"
};
/* Please refer to the end user agreement at codebydom.com/plazy.html before looking at this code.
All of this code was created by Dom Pizzano*/