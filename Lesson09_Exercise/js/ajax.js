// Structure
//------------------------------------------------
var p = document.querySelector("body p");
var ul = document.querySelector(".concepts");

// create path to ajax request
var url= "https://api.consumerfinance.gov/data/hmda.json"


// setup AJAX request
var jqxhr = $.getJSON(url, handleData);

// callback function for ajax request
// ajax callbacks expect the json data
function handleData(json) {
   console.log(json);
   var description = json['description'];


// --- Exercise #1 --------------------------------
   //console.log (description);
   //debugger
   //p.textContent = description;

// --- Exercise #2 --------------------------------
   var concept = json["_embedded"]["concepts"];
   concept.forEach(createConcept);

   function createConcept(item){

       var li = document.createElement("li");
       li.innerHTML = item["description"] 
   	   //console.log('createConcept');
   	   //console.log(item["description"]);
   	   ul.appendChild(li);
       };

}




