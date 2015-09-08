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

var Skype = new HappensEverySecond("skype",1611);




window.setInterval(function(){
  /// call your function here
  document.getElementById(Skype.type).innerHTML = "Calls made " + Skype.returnSecs();
}, 100);

