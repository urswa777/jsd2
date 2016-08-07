// Setup
//-------------------------------------
	var resturant = { "dataSource":"Hardcode",
                       "list":
                   [
		             {"resturantName":"McDonald", "resturantAddress" : "123 Main St.", "imgSrc" : "pad-thai-thumb.jpg"},
		             {"resturantName":"KFC", "resturantAddress" : "77 Broardway St.", "imgSrc" : "pad-thai-thumb.jpg"},
		             {"resturantName":"Panda Express", "resturantAddress" : "11 Spear St.", "imgSrc" : "pad-thai-thumb.jpg"}
                   ] 
                    };


	var resturantDatabase = { "dataSource":"Hardcode",
                       "list":
                   [
		             {"resturantName":"McDonald", "resturantAddress" : "123 Main St.", "imgSrc" : "pad-thai-thumb.jpg"},
		             {"resturantName":"KFC", "resturantAddress" : "77 Broardway St.", "imgSrc" : "pad-thai-thumb.jpg"},
		             {"resturantName":"Panda Express", "resturantAddress" : "11 Spear St.", "imgSrc" : "pad-thai-thumb.jpg"}
                   ] 
                    };

	var resturant_1 = {"resturantName":"McDonald", "resturantAddress" : "123 Main St.", "imgSrc" : "pad-thai-thumb.jpg"};
	var resturant_2 = {"resturantName":"KFC", "resturantAddress" : "77 Broardway St.", "imgSrc" : "pad-thai-thumb.jpg"};
	var resturant_3 = {"resturantName":"Panda Express", "resturantAddress" : "11 Spear St.", "imgSrc" : "pad-thai-thumb.jpg"};
    var resturantArray = [];
    resturantArray.push(resturant_1, resturant_2, resturant_3) ;                  

	var resturantName ="McDonald";
	var resturantAddress="123 Main St.";
    var imgSrc="pad-thai-thumb.jpg";

// Structure
// ------------------------------------

    result_list = document.querySelector(".results");

    var form = document.querySelector("form");
    var zip  = document.querySelector("form .zip");
    var results = document.querySelector(".results");



// Events
// ------------------------------------
    form.addEventListener('submit', getResturants)


// Event Handler 
// ------------------------------------
function createResturant(){
    var li  = document.createElement("li");
    var img = document.createElement("img");
    var h2  = document.createElement("h2");
    var p   = document.createElement("p");

    //h2.innerHTML=resturantName;
    //p.innerHTML = resturantAddress;
    //img.src     =imgSrc;
    //h2.textContent=resturantName;
    //p.textContent = resturantAddress;

    h2.innerHTML = resturant.list[2].resturantName;
    p.innerHTML  = resturant.list[2].resturantAddress;
    img.src      = resturant.list[2].imgSrc;
    
    //resturant.list.forEach(
    //
    //   h2.innerHTML = resturant.list[1].["resturantName"];
    //   p.innerHTML  = resturant.list[1].["resturantAddress"];
    //   img.src      = resturant.list[1].["imgSrc"];
    //        li.appendChild(img);       
    //        li.appendChild(h2);   
    //        li.appendChild(p);  
    //        result_list.appendChild(li);
    //
    //	);

     li.appendChild(img);       
     li.appendChild(h2);   
     li.appendChild(p);  
     result_list.appendChild(li);

}


//-------------------------------------------------------------
function AddResturant_Database(resturantDatabase){
    var li  = document.createElement("li");
    var img = document.createElement("img");
    var h2  = document.createElement("h2");
    var p   = document.createElement("p");
    
    resturantDatabase.list.forEach(
    //
    //   h2.innerHTML = resturant.list[1].["resturantName"];
    //   p.innerHTML  = resturant.list[1].["resturantAddress"];
    //   img.src      = resturant.list[1].["imgSrc"];
    //        li.appendChild(img);       
    //        li.appendChild(h2);   
    //        li.appendChild(p);  
    //        result_list.appendChild(li);
    //
    //	);

     li.appendChild(img);       
     li.appendChild(h2);   
     li.appendChild(p);  
     result_list.appendChild(li);

}

var 

function getResturants(event) {
    event.preventDefault();

	var search = zip.value;
    console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip="+ search;
    //---- Syntax:    $.getJSON(url, callback);
    $.getJSON(url, updateResturants);

}

function updateResturants(json){
	console.log('updateResturant',json);
	json.resturants.forEach(createResturant);
}
// Update page
// ------------------------------------
