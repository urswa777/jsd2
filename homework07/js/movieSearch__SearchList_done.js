// Setup
// ----------------------------------------------
var g_searchMovieTitle = ""; 
var url_search ="";
var one_movie_is_chosen=0;
var defaultMoviePoster_img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc-k0F0Og_2TFjqrEy38pgK1-0_qnv7EVLWLCTlA_MaA7-1xI3nw";
// Structure
// ----------------------------------------------
var _form    = document.querySelector(".search_form");
var _search  = document.querySelector("form .search");
//var _form2    = document.querySelector(".clear_DTL_form");
//var _clearDTL   = document.querySelector("form .clearDTL");
//var _form3    = document.querySelector(".clear_List_form");
//var _clearList   = document.querySelector("form .clearList");

var _poster  =    document.querySelector(".poster");
var _title   =    document.querySelector(".title");
var _plot    =    document.querySelector(".plot");
var _url     =    document.querySelector(".imdb-link");

var _searchSummary = document.querySelector(".searchSummary");
var _results       = document.querySelector(".results");

// Events
// ----------------------------------------------
//_search.addEventListener('click',goSearch);
_form.addEventListener('submit',goSearch);
//_form2.addEventListener('submit',clearDTLScreen);
//_form3.addEventListener('submit',clearListScreen);


// Event handlers
// ----------------------------------------------
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
        alert ("Please enter something to search Movie");
    	return;
    }
	console.log('button Submit! ');
	//------------------------------------------------------------
	console.log('Step1 - Search movie from web! ');	
	console.log( 'Search Movie:'+ g_searchMovieTitle ); 
    searchMovieList(g_searchMovieTitle);

	//------------------------------------------------------------
	console.log('Step2 - Reset Detail region and display the top one! ');	

	//------------------------------------------------------------
	console.log('Step3 - Reset List region! ');	

	//------------------------------------------------------------
	console.log('Step4 - Display List of movies! ');	
    _search.value="";
}


// Supporting Functions
// ----------------------------------------------

function searchMovieList(search_str){
	console.log("Trigger action : Search Movie with string '"+search_str+"'");	
    url_search = "http://www.omdbapi.com/?s="+search_str;
	console.log("URL >> "+ url_search);	
	$.getJSON(url_search, showMovieList);
    debugger
}



//  http://www.omdbapi.com/?s=boy
function clearMovieListDisplay(movie_id){
	console.log('Trigger action  : Clear Movie List Display! ');	
}

function clearMovieDetailDisplay(movie_id){
	console.log('Trigger action  : Clear Movie Detail Display! ');	
}

function search1MovieDetail(movie_id){
	console.log('Trigger action  : Show one Movie detail! ');	
}

function showOneMovieDetail(oneMovie){
	console.log('-- Trigger action  : Show one Movie detail! ');	
}

function showMovieList(list){
    var searchSummary_HTML="";
    var movieList = list.Search;
	console.log('-- Trigger action  : Show search result (movie list) ');	
	console.log(list);
	console.log(list.totalResults + " movies returned for keyword '"+ g_searchMovieTitle + "'");
	console.log("Here are the top 10 movies :");
    searchSummary_HTML="Search Summary: "+list.totalResults 
                   + " movies returned for keyword <strong>'"+ g_searchMovieTitle 
                   + "</strong>'. <br>Here are the top " 
                   + movieList.length + " movies :";
    _searchSummary.innerHTML=searchSummary_HTML;
    clearDTLScreen();
    clearListScreen();
    movieList.forEach(showOneMovieHeader);
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


// Update page
// ----------------------------------------------
