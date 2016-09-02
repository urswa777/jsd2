// New JavaScript vocab words:
// 1. prototype
// 2. constructor
// 3. new
// 4. this


// Constructor
var Fighter = function(name) {
	this.name = name;
	this.punch = function() {
		alert(this.name + " punches");
	}
}

Fighter.prototype.hadouken = function() {
	alert(this.name + " punches");
}



var ShotokanFighter = function(name) {
	this.hadoken = function() {
		alert(this.name + " special attack: hadoken");
	}
}


ShotokanFighter.prototype = Object.create(Fighter.prototype);


