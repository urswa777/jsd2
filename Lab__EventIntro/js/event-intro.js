// Setup
// ----------------------------------------------
var counter = 0;


// Structure
// ----------------------------------------------
var main = document.querySelector("main");


// Create Element
// ----------------------------------------------
var p = document.createElement("p");
p.innerHTML = counter;
main.appendChild(p);


// Create Event
// ----------------------------------------------
var me = document.createEvent("MouseEvent");
me.initEvent("click");


// Event Listeners
// ----------------------------------------------
p.addEventListener("click", circleClicked);


// Event Handlers
// ----------------------------------------------
function circleClicked(e) {
	console.log("---circleClicked---");

	counter++;
	p.innerHTML = counter;

	console.log("type", e.type);
	console.log("target", e.target);
	console.log("content", e.target.innerHTML);

}


// Dispatch the event manually
p.dispatchEvent(me);

