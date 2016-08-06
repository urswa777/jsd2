// Setup
// ----------------------------------------------

// Structure
// ----------------------------------------------
var stop_btn = document.querySelector(".stop-button");
var slow_btn = document.querySelector(".slow-button");
var go_btn = document.querySelector(".go-button");
var caution_btn = document.querySelector(".caution-button");

var trafficlights = document.querySelector(".light");



// Events
// ----------------------------------------------
stop_btn.addEventListener("click", fx_stop);
slow_btn.addEventListener("click", fx_slow);
go_btn.addEventListener("click", fx_go);
caution_btn.addEventListener("click", fx_caution);



// Event handlers
// ----------------------------------------------
function fx_stop(e) {
   stop_btn.classList.add("stop-light")
} ;