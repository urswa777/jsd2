// Setup
// ----------------------------------------------
var caution_period = 1000;
var xmas_period    = 1000;
var auto_period    = 3000;
var disco_period   = 1000;

var caution_btn_clicks = 0;
var auto_btn_clicks    = 0;
var xmas_btn_clicks    = 0;
var disco_btn_clicks   = 0;

var caution_timer = setInterval( caution_move, 1);
window.clearInterval(caution_timer);
var auto_timer = setInterval( auto_move, 1);
window.clearInterval(auto_timer);

var Caution_Timeout1 = setTimeout(caution_off, 1);
window.clearTimeout(Caution_Timeout1);

var Auto_Timeout1 = setTimeout(auto_move2, 1);
window.clearTimeout(Auto_Timeout1);
var Auto_Timeout2 = setTimeout(auto_move3, 1);
window.clearTimeout(Auto_Timeout2);
var Auto_Timeout3 = setTimeout(auto_move4, 1);
window.clearTimeout(Auto_Timeout3);


// Structure
// ----------------------------------------------
var btn_stop    = document.querySelector(".stop-button");
var btn_slow    = document.querySelector(".slow-button");
var btn_go      = document.querySelector(".go-button");
var btn_caution = document.querySelector(".caution-button");
var btn_poweroff   = document.querySelector(".poweroff-button");
var btn_auto       = document.querySelector(".auto-button");

var trafficlights = document.querySelector(".traffic-light");



// Events
// ----------------------------------------------
btn_stop.addEventListener("click", fx_stop);
btn_slow.addEventListener("click", fx_slow);
btn_go.addEventListener("click", fx_go);
btn_caution.addEventListener("click", fx_caution);
btn_poweroff.addEventListener("click", fx_poweroff);
btn_auto.addEventListener("click", fx_auto);

// Functions
//-----------------------------------------------
function reset(){
   if (auto_btn_clicks % 2 == 1) { 
         window.clearInterval(auto_timer);
         auto_btn_clicks=0;
       } ;   
   if (caution_btn_clicks % 2 ==1) {
          window.clearInterval(caution_timer);
          caution_btn_clicks =0;
       }
   window.clearTimeout(Caution_Timeout1);
   window.clearTimeout(Auto_Timeout1);
   window.clearTimeout(Auto_Timeout2);
   window.clearTimeout(Auto_Timeout3);	
}


// Event handlers
// ----------------------------------------------
function fx_poweroff(e) {
   reset();
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("slow");
   trafficlights.classList.remove("stop");
} ;

function fx_stop(e) {
   reset();
   trafficlights.classList.remove("stop");
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("slow");
   trafficlights.classList.add("stop");
} ;

function fx_slow(e) {
   reset();
   trafficlights.classList.remove("slow");
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("stop");
   trafficlights.classList.add("slow");
} ;

function fx_go(e) {
   reset();
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("stop");
   trafficlights.classList.remove("slow");
   trafficlights.classList.add("go");
} ;




//-----------------------------------------------
function fx_caution(e) {

   if (auto_btn_clicks % 2 == 1) { 
         window.clearInterval(auto_timer);
         auto_btn_clicks=0;
       } ;   
   window.clearTimeout(Auto_Timeout1);
   window.clearTimeout(Auto_Timeout2);
   window.clearTimeout(Auto_Timeout3);	
   caution_btn_clicks +=1;
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("slow");
   trafficlights.classList.remove("stop");
   if (caution_btn_clicks % 2 == 1) {
       caution_timer = window.setInterval( caution_move, caution_period);
   } else {
       window.clearInterval(caution_timer);
   }
} ;

function caution_move() {
   trafficlights.classList.add("slow");	
   Caution_Timeout1 = setTimeout(caution_off, 500);
}

function caution_off() {
   trafficlights.classList.remove("slow");	
}




//-----------------------------------------------
function fx_auto(e) {
   if (caution_btn_clicks % 2 ==1) {
          window.clearInterval(caution_timer);
          caution_btn_clicks =0;
       }
   window.clearTimeout(Caution_Timeout1);
   auto_btn_clicks +=1;
   trafficlights.classList.remove("go");
   trafficlights.classList.remove("slow");
   trafficlights.classList.remove("stop");
   if (auto_btn_clicks % 2 == 1) {
       auto_timer = window.setInterval( auto_move, auto_period);
   } else {
       window.clearInterval(auto_timer);
   }
} ;

function auto_move() {
   trafficlights.classList.add("slow");	
   Auto_Timeout1 = setTimeout(auto_move2, 1000);
}

function auto_move2() {
   trafficlights.classList.remove("slow");	
   trafficlights.classList.add("stop");	
   Auto_Timeout2 = setTimeout(auto_move3, 1000);
}

function auto_move3() {
   trafficlights.classList.remove("stop");	
   trafficlights.classList.add("go");	
   Auto_Timeout3 = setTimeout(auto_move4, 1000);
}

function auto_move4() {
   trafficlights.classList.remove("go");	
}




