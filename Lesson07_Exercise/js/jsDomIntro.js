//======================================================
//===  Template of Javascript program   ================
//======================================================



// STEP1 : LOAD THE Structure (ELEMENTS INVOLVED)
// ------------------------------------------
var form = document.querySelector("body form");
var ul = document.querySelector("#fav-list");
var new_thing = "";

   // <ul id="fav-list">
   // <li class="fav-thing">Dog bites</li>
   // <input class="new-thing-input" />
   // <input class="new-thing-button" type="submit" value="Create new thing"></submit>

// Step2 : Define all potential Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Step3 : Define all "Event Listeners" functions
// ------------------------------------------
function createNewThing(e) {
    e.preventDefault();
    console.log('create_NewThing');
    add_listitem(check_new_thing());
}


// *** other supporting function :  Update Page function
// ------------------------------------------
function addToList(newThing) {
   console.log('addToList');
}

function check_new_thing() {
    new_thing = document.querySelector(".new-thing-input").value;
    console.log('check_NewThing and it is : ', new_thing, new_thing.length);

    if (new_thing.length == 0)     {
    	alert ("you must type in a value");
      }  
    return new_thing;  
}

function add_listitem(text) {
   console.log('TEXT fed in this function is : ', text);
    if (text.length > 0) {
        var li = document.createElement("li");
        li.innerHTML = text;
        ul.appendChild(li);
    }  
}
