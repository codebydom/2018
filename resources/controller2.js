/* Please refer to the end user agreement at codebydom.com/playz.html before looking at this code.
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
function nexttime(){
	if (!$('#video').hasClass("vv")){
	if (parseInt(document.getElementById("word").name)==document.getElementsByClassName("time").length-1){
		document.getElementById("audi").play();
		$("#next").addClass("hidden");
		document.getElementById("audi").currentTime=document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value;
	} else {
		document.getElementById("audi").play();
	 	document.getElementById("audi").currentTime=document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value;
	 	document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
	 } 
	} else {
		vnexttime();
	}
}
//to determine how many words are being inputed
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
var tc = setInterval(timecheck ,1000);
function timecheck() { 
		if ($('li').hasClass("time")&&document.getElementById("word").name!="Done"&& !$('#video').hasClass("vv")){
			if (document.getElementById("audi").currentTime>parseInt(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML)){
				if (parseInt(document.getElementById("word").name)>=document.getElementsByClassName("time").length-1){
					document.getElementById("word").name="Done"
					$("#next").addClass("hidden");
				} else {
					document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
				}
		}
	}
}
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
		document.getElementById("audiotitle").innerHTML=document.getElementById("p2").innerHTML+"<i class='material-icons'>explicit</i>"
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the podcast to find the picks for certain teams and games, as well as to see what they put as their lock of the weekend and who to watch for an upset."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span> Barstool Pick Em - College Bowl Games With Intern Winner Blackjack Fletcher, going through all the winners and locks for this weekend’s upcoming College Bowl Games. Winner Blackjack Fletcher who has been on a hot streak gives us his picks out for free. You would be losing money if you didn't listen to this podcast."
	})
}
function p3(){
	$("#aud").load(location.href + " #audi",function(){
		document.getElementById("asrc").src = "resources/rundown.mp3";
		document.getElementById("audioselect").value="4";
		document.getElementById("audiotitle").innerHTML=document.getElementById("p3").innerHTML+"<i class='material-icons'>explicit</i>"
		document.getElementById("bc").innerHTML="<span>Business Case: </span> Users can search through the words spoken in the podcast to find topics the Barstool media members talk about that the user wants to specifically hear about."
		document.getElementById("dc").innerHTML="<span>Description of Audio:</span>  Barstool Rundown- El Pres and Big Cat talk about the hottest topics from the internet on Dec 21. 2017. Topics include an NFL executive getting fired, Mark Wahlberg and Apple admitting they scammed everyone who ever had an iPhone."
	})
}
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
function uncheck(){
	if (document.getElementById("agreement").name=="yes"){
		$("#check").click();
	}
}
function fagree(){
	$("#contd").addClass("hidden")
	$("#agreement").addClass("hidden")
	$("#playa").removeClass("hidden")
	$("#vplaya").removeClass("hidden")
	$("#dscript").removeClass("hidden")
}
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
});
// BELOW ARE FUNCTIONS ADDED FOR VIDEO CAPABILITES
function vnexttime(){
	var stus = String(document.getElementById("utube").src).split("?");
	if (parseInt(document.getElementById("word").name)==document.getElementsByClassName("time").length-1){
		$("#next").addClass("hidden");
		var stu = stus[0]+"?autoplay=1&start="
		var source = String(Math.floor(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value))
		document.getElementById("utube").src=stu+source
	} else {
		var stu = stus[0]+"?autoplay=1&start="
		var source = String(Math.floor(document.getElementsByClassName("time")[parseInt(document.getElementById("word").name)].innerHTML-document.getElementById('b4').value))
		document.getElementById("utube").src=stu+source
		document.getElementById("word").name = String(parseInt(document.getElementById("word").name)+1);
	 }
}
function v1(){
	document.getElementById("utube").src="https://www.youtube.com/embed/OLHdzLpMg-s"
	document.getElementById("audioselect").value="jre"
};
function v2(){
	document.getElementById("utube").src="https://www.youtube.com/embed/0JUN9aDxVmI"
	document.getElementById("audioselect").value="lec"
};
function v3(){
	document.getElementById("utube").src="https://www.youtube.com/embed/TJUhicWfLxc"
	document.getElementById("audioselect").value="und"
};