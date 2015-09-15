var skypeCalls=0;

function HappensEverySecond(type,multiplier){
	this.type = type;
	this.total = 0;
	this.multiplier = multiplier;

	this.returnSecs=function(){
		this.total += this.multiplier;
		return this.total;
	};

}

var Skype = new HappensEverySecond("skype",161.1);
var Reddit = new HappensEverySecond("reddit",19.7);
var Twitter = new HappensEverySecond("twitter",819.5);
var Insta = new HappensEverySecond("insta",155.5);
var Tumblr = new HappensEverySecond("tumblr",163.6);
var Google = new HappensEverySecond("google",4670.1);
var Youtube = new HappensEverySecond("youtube",9284.1);
var Emails = new HappensEverySecond("emails",235591.1);
var Netflix = new HappensEverySecond("netflix",40.5);
var Facebook = new HappensEverySecond("facebook",5480.6);
var Dropbox = new HappensEverySecond("dropbox",1638.7);

window.setInterval(function(){
  /// call your function here
  UpdateHappenings();
}, 100);

var UpdateHappenings = function(){
	document.getElementById(Skype.type).innerHTML = "Skype calls made: " + Math.round(Skype.returnSecs());
  	document.getElementById(Reddit.type).innerHTML = "Reddit votes cast: " + Math.round(Reddit.returnSecs());
  	document.getElementById(Twitter.type).innerHTML = "Tweets posted: " + Math.round(Twitter.returnSecs());
  	document.getElementById(Insta.type).innerHTML = "Instagram pictures posted: " + Math.round(Insta.returnSecs());
  	document.getElementById(Tumblr.type).innerHTML = "Tumblr posts: " + Math.round(Tumblr.returnSecs());
  	document.getElementById(Google.type).innerHTML = "Google searches: " + Math.round(Google.returnSecs());
  	document.getElementById(Youtube.type).innerHTML = "YouTube videos watched: " + Math.round(Youtube.returnSecs());
  	document.getElementById(Emails.type).innerHTML = "Emails sent: " + Math.round(Emails.returnSecs());
  	document.getElementById(Netflix.type).innerHTML = "Hours of netflix watched: " + Math.round(Netflix.returnSecs());
  	document.getElementById(Facebook.type).innerHTML = "Facebook likes: " + Math.round(Facebook.returnSecs());
  	document.getElementById(Dropbox.type).innerHTML = "Dropbox files uploaded " + Math.round(Dropbox.returnSecs());
}
