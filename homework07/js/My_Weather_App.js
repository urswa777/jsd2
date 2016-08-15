// Setup
// ----------------------------------------------
var today_ = Date();
var weekday_ = today_.substring(1, 3);
var weekday = "";
switch (weekday) {
  case "Mon"  : weekday="Monday"; break;
  case "Tue"  : weekday="Tuesday"; break;
  case "Wed"  : weekday="Wednesday"; break;
  case "Thu"  : weekday="Thurday"; break;
  case "Fri"  : weekday="Friday"; break;
  case "Sat"  : weekday="Saturday"; break;
  case "Sun"  : weekday="Sunday"; break;
  default : weekday="Sunday";
} 
var event = new Event('submit');

var g_searchMovieTitle = ""; 
var url_search_api   ="https://www.omdbapi.com/?s=";
var url_oneMovie_api ="https://www.omdbapi.com/?i=";
var url_search       ="";
var url_oneMovie     ="";
var one_movie_is_chosen=0;
var defaultMoviePoster_img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc-k0F0Og_2TFjqrEy38pgK1-0_qnv7EVLWLCTlA_MaA7-1xI3nw";
var DetailMovieId    ="";
var movieCounter     =0;


// Structure
// --------------------section1: search --------------------
var _form           = document.querySelector(".search_form");
var _search         = document.querySelector("form .search");
var _search_status  = document.querySelector(".search_status");
var _loc_city       = document.querySelector(".location_city");
var _loc_state      = document.querySelector(".location_state");


// --------------------section2: current --------------------
var _curr_temp                 = document.querySelector(".curr_Temp");
var _curr_temp_unit_icon       = document.querySelector(".curr_temp_unit_icon");
var _curr_weather_type_icon    = document.querySelector(".curr_weather_type_icon");
var _curr_hourly_trend_icon    = document.querySelector(".curr_hourly_trend_icon");
var _weather_forecast_keyword  = document.querySelector(".weather_forecast_keyword");

// --------------------section3: alert --------------------
var _alert_icon      =    document.querySelector(".alert_icon");
var _alert_subject   =    document.querySelector(".alert_subject");
var _alert_details   =    document.querySelector(".alert_details");

// --------------------section4: forecasts --------------------
var _fc_seven_days      = document.querySelector(".fc_seven_days");

var _weekday1           = document.querySelector(".weekday1");
var _hi_temp1           = document.querySelector(".hi_temp1");
var _lo_temp1           = document.querySelector(".lo_temp1");
var _weather_type_icon1 = document.querySelector(".weather_type_icon1");

var _weekday2           = document.querySelector(".weekday2");
var _hi_temp2           = document.querySelector(".hi_temp2");
var _lo_temp2           = document.querySelector(".lo_temp2");
var _weather_type_icon2 = document.querySelector(".weather_type_icon2");

var _weekday3           = document.querySelector(".weekday3");
var _hi_temp3           = document.querySelector(".hi_temp3");
var _lo_temp3           = document.querySelector(".lo_temp3");
var _weather_type_icon3 = document.querySelector(".weather_type_icon3");

var _weekday4           = document.querySelector(".weekday4");
var _hi_temp4           = document.querySelector(".hi_temp4");
var _lo_temp4           = document.querySelector(".lo_temp4");
var _weather_type_icon4 = document.querySelector(".weather_type_icon4");

var _weekday5           = document.querySelector(".weekday5");
var _hi_temp5           = document.querySelector(".hi_temp5");
var _lo_temp5           = document.querySelector(".lo_temp5");
var _weather_type_icon5 = document.querySelector(".weather_type_icon5");

var _weekday6           = document.querySelector(".weekday6");
var _hi_temp6           = document.querySelector(".hi_temp6");
var _lo_temp6           = document.querySelector(".lo_temp6");
var _weather_type_icon6 = document.querySelector(".weather_type_icon6");

var _weekday7           = document.querySelector(".weekday7");
var _hi_temp7           = document.querySelector(".hi_temp7");
var _lo_temp7           = document.querySelector(".lo_temp7");
var _weather_type_icon7 = document.querySelector(".weather_type_icon7");




// Events
// ----------------------------------------------
_form.addEventListener('submit',goSearch);
_fc_seven_days.addEventListener("click",grab_OneDay_fc_details);


// Event handlers
// ----------------------------------------------
function grabSelectedMoive(e){
    console.log('Trigger function : grabSelectedMovie');
    console.log('What you clicked is : ' + e.target);
    var target = e.target;

    if (target.TagName != "LI") {
        console.log("you missed it, loser !!");
    	target = target.closest("LI");
    }
    console.log('What you got is : ' + target);
    console.log('IMDB id is : ' + target.id);
    console.log("Finally, you got it  !! ");
    searchMovieDetail(target.id);
}


function clearDTLScreen(e){
	event.preventDefault();
    
    //--- clear DETAIL portion
    _poster.src="";
    _title.textContent= "" ;
    _plot.textContent= "" ;
    _url.textContent= "" ;
    _url.href= "" ;

    //--- clear LIST portion
}

function clearListScreen(e){
	event.preventDefault();
    
    //--- clear DETAIL portion
    _results.innerHTML= "" ;

    //--- clear LIST portion
}

function goSearch(e){
	event.preventDefault();
    var search_str_ = _search.value;
    g_searchMovieTitle = search_str_.trim();
    
    if (g_searchMovieTitle.length ==0) {
        alert ("Enter City and State (e.g. 'Belmont, CA')");
    	return;
    }
	console.log('button Submit! ');
	//------------------------------------------------------------
	console.log('Step1 - Search movie from web! ');	
	console.log( 'Search Movie:'+ g_searchMovieTitle ); 
    searchMovieList(g_searchMovieTitle);

	//------------------------------------------------------------
	console.log('Step4 - Display List of movies! ');	
    _search.value="";
}


// Supporting Functions
// ----------------------------------------------

function searchMovieList(search_str){
	console.log("Trigger action : Search Movies with string '"+search_str+"'");	
    url_search = url_search_api + search_str;
	console.log("URL >> "+ url_search);	
	$.getJSON(url_search, showSearchResult);
}




function showSearchResult(list){
    var searchSummary_HTML="";
    var movieList = list.Search;
    var no_of_movies = list.totalResults ;
	console.log('-- Trigger action  : Show search result (movie list) ');	
	console.log(list);
	console.log(list.totalResults + " movies returned for keyword '"+ g_searchMovieTitle + "'");
	console.log("Here are the top 10 movies :");

    clearDTLScreen();
    clearListScreen();
if (list.totalResults != undefined) { 
    _movieIntro.textContent="Movie Intro";
    searchSummary_HTML="Search Summary: "+list.totalResults 
                   + " movies returned for keyword <strong>'"+ g_searchMovieTitle 
                   + "</strong>'. <br>Here are the top " 
                   + movieList.length + " movies :";
    _searchSummary.innerHTML=searchSummary_HTML;
	movieList.forEach(showOneMovieHeader); //--- show list of movies' header
	movieList.forEach(show1stMovieDetail);
	movieCounter=0;
	 } 
else {
	//var  prev_Summary =   _searchSummary.innerHTML;
    var buf="Sorry !! No movies found for keyword <strong>'"+ g_searchMovieTitle 
                   + "</strong>'.  Please search again !! <br>";
    _searchSummary.innerHTML=buf;
    _movieIntro.textContent="";
	 }  
}


function showOneMovieHeader(OneMovie) {
	var movieImgStr="";
	var movieTitle="";
	var movieID="";
    var li=document.createElement("li");
    var img=document.createElement("img");
    var p=document.createElement("p");
    var buf="";
    movieTitle= OneMovie.Title ;
    movieImgStr = OneMovie.Poster;
    movieID = OneMovie.imdbID;

    buf=movieTitle.trim();
    if (buf.length==0) {
      return;
    }
    buf=movieID.trim();
    if (buf.length==0) {
      return;
    }
    buf=movieImgStr.trim();
    if (buf.length==0) {
      movieImgStr = defaultMoviePoster_img;
    }
    //---------------------------------------------------
    li.id=movieID;
    p.innerHTML= OneMovie.Title ;
    img.src=movieImgStr;

    li.appendChild(img);
    li.appendChild(p);
    _results.appendChild(li);
}


function show1stMovieDetail(OneMovie) {
	var buf=0;
	if (movieCounter>0) {
	   console.log('Not First movie, ignore!')
	   return;
	}
	console.log('Show First movie with ID' + OneMovie.imdbID)

    DetailMovieId = OneMovie.imdbID;
    buf=DetailMovieId.trim();
    if (buf==0) {
    	return;
    }
    searchMovieDetail(DetailMovieId);
    
 
    /*
	var movieImgStr="";
	var movieTitle="";
	var movieID="";
    var li=document.createElement("li");
    var img=document.createElement("img");
    var p=document.createElement("p");
    var buf="";
    movieTitle= OneMovie.Title ;
    movieImgStr = OneMovie.Poster;
    movieID = OneMovie.imdbID;

    buf=movieTitle.trim();
    if (buf.length==0) {
      return;
    }
    buf=movieID.trim();
    if (buf.length==0) {
      return;
    }
    buf=movieImgStr.trim();
    if (buf.length==0) {
      movieImgStr = defaultMoviePoster_img;
    }
    //---------------------------------------------------
    li.id=movieID;
    p.innerHTML= OneMovie.Title ;
    img.src=movieImgStr;

    li.appendChild(img);
    li.appendChild(p);
    _results.appendChild(li);

    movieCounter+=1;
    */
    movieCounter+=1;
}

function searchMovieDetail(movie_id){
	console.log("Trigger action : Search one Movie with imdb ID '"+movie_id+"'");	
    url_oneMovie = url_oneMovie_api + movie_id;
	console.log("URL >> "+ url_oneMovie);	
	$.getJSON(url_oneMovie, showOneMovieDetail);
}

function showOneMovieDetail(OneMovieJson) {
    console.log('showOneMovieDetail()');
    console.log(OneMovieJson);
	var moviePoster=OneMovieJson.Poster;
	var movieTitle=OneMovieJson.Title;
	var moviePlot=OneMovieJson.Plot;
	var movieURL="http://www.imdb.com/title/"+OneMovieJson.imdbID;
	var movieURL_desc="View on IMDB";
    var buf="";

    buf=moviePoster.trim();
    if (buf.length==0) {
      moviePoster = defaultMoviePoster_img;
    }
   
    _poster.src=moviePoster;
    _title.textContent= movieTitle ;
    _plot.textContent= moviePlot ;
    _url.textContent= movieURL_desc;
    _url.href= movieURL ;


/*
  "Year": "2002",
  "Rated": "PG-13",
  "Released": "17 May 2002",
  "Runtime": "101 min",
  "Genre": "Comedy, Drama, Romance",
  "Director": "Chris Weitz, Paul Weitz",
  "Actors": "Hugh Grant, Nicholas Hoult, Sharon Small, Madison Cook",
  "Language": "English",
  "Country": "UK, USA, France, Germany",
  "Awards": "Nominated for 1 Oscar. Another 11 wins & 28 nominations.",
  "imdbRating": "7.1",
*/
    
}

// Update page
// ----------------------------------------------
    _search.value="San Francisoc, CA";
    _form.dispatchEvent(event);



