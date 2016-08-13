// Setup
// ----------------------------------------------
var g_searchMovieTitle = ""; 
var url_search_api   ="https://www.omdbapi.com/?s=";
var url_oneMovie_api ="https://www.omdbapi.com/?i=";
var url_search   ="";
var url_oneMovie ="";
var one_movie_is_chosen=0;
var defaultMoviePoster_img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc-k0F0Og_2TFjqrEy38pgK1-0_qnv7EVLWLCTlA_MaA7-1xI3nw";
var DetailMovieId="";
var movieCounter=0;

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
    movieList.forEach(showOneMovieHeader); //--- show list of movies' header
    movieList.forEach(show1stMovieDetail);
    movieCounter=0;
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
    
}

// Update page
// ----------------------------------------------
