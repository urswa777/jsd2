// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];
var no_favorite = [];
 

// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var flush    = document.querySelector('.flush');
var flush1   = document.querySelector('.flush1');
var list     = document.querySelector('.list');


// Events based on the 3 buttons
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);
flush.addEventListener('click', flushFavorites);
flush1.addEventListener('click', flushOneFavorite);


// other functions
// ------------------------------------------
function random_num (min, max) {
	var num = (Math.random() * (max - min)) + min;
	return Math.round(num);
}

// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	 X_counter =  random_num (1,6) - 1;
	 Y_counter =  random_num (1,5) - 1;
    
	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
 	startupIdea = 'A startup that is '+ startupX [X_counter] +', but for ' + startupY [Y_counter] ;
	// Update page with new startup idea
    console.log ("Generate Startup: " + startupIdea);
	startup.innerHTML = startupIdea;
}

function flushFavorites() {
	//favorites=no_favorite;
    len = favorites.length;

  if (len == 0) {
    list.innerHTML = "No Favorite to be flushed";
    console.log ("No Favorite to be flushed");
  } else {
    for (var k=0; k< len; k++) {   favorites.pop();  }
    list.innerHTML = "All Favorites are flushed";
    console.log ("All Favorites are flushed");
  }
}

function flushOneFavorite() {
	//favorites=no_favorite;
    flushlast = favorites[favorites.length -1 ];

    list.innerHTML = "'" + flushlast + "'' is flushed";
    console.log ("'" + flushlast + "'' is flushed");
    favorites.pop();    
}

function saveFavorite() {
    to_skip=false;

    if (favorites.length >= 10) {
        console.log ("You can only have at most 10 Favorites");
     	list.innerHTML = "You can't save any more since it is limited to 10 Favorites";
    }
    else {
			// TODO: add the new idea to the array
		    for (var i=0; i< favorites.length; i++) {
		             if (favorites[i] ==  startupX [X_counter] + "/" + startupY [Y_counter] ) to_skip = true;           
		       }

		    if  (to_skip==true) {
		       console.log( "the favorite was added before, so skip it" );
		       list.innerHTML = favorites[favorites.length - 1] + " was saved before.";
		    } else  {
		        favorites.push(startupX [X_counter] + "/" + startupY [Y_counter]);
		        console.log ("Save a Favorite: " + startupX [X_counter]);
		        console.log ("Now here are all Favorite: " + favorites);
                if (10 - favorites.length ==0) {
     		    	list.innerHTML = favorites[favorites.length - 1] + " is saved. But you can't add more unless you flush the saved !";
                }
                else {
     		    	list.innerHTML = favorites[favorites.length - 1] + " is saved. And you may add " + 
		    	         (10 - favorites.length ) + " more !!";
                  }

		     }     
    }
}

function printFavorites() {
	var favoritesText;
	var favoritesBuf="";

	// clear out favorites element
    if (favorites.length == 0) {
     	favoritesText= 'No favorite is saved' ;    	
    } else if (favorites.length == 1) {
     	favoritesText = 'The favorite is ' + favorites ;
    } else if (favorites.length > 1) {

       for (var i=0; i< favorites.length; i++) {
               if (i==0) {
                 favoritesBuf = favorites[0] ;
                } 
               else {
                 favoritesBuf = favoritesBuf + "<br>" + favorites[i];    
               }        
           }
     	favoritesText = 'The favorites are : <br>'+ favoritesBuf  + '<br>';
//---------------------------------------------------------------------------------

      	//favoritesText = 'The favorites are : '+ favorites ;
    }

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")
	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}


// Init
// ------------------------------------------
generateStartup();

