 var article_id = 0;
 var c_max_article_id=10;
 var src_id=-1;
  c_api_url_NewsSrc1="https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
  c_api_url_NewsSrc2="https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
  c_api_url_NewsSrc3="https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
  c_api_url_NewsSrc4="https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
  c_api_url_NewsSrc5="http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?offset=20&api-key=f525061998aa4dbe8cdd3eca57566c75"


// Structure ----------------------------------------------------------

 _srcAction=document.querySelector(".Actions");
 _selectedSrc=document.querySelector(".NewsSrcName");
 _newsSrcAll=document.querySelector(".Just10");
 _newsSrc1=document.querySelector(".NewsAPI_Entertainment");
 _newsSrc2=document.querySelector(".NewsAPI_Sports");
 _newsSrc3=document.querySelector(".NewsAPI_Finance");
 _newsSrc4=document.querySelector(".NewsAPI_Tech");
 _newsSrc5=document.querySelector(".API_NewYorkTimes");
 //_newsSrc6=document.querySelector(".API_Bloomberg");
 _listOfArticle_Container=document.querySelector(".listOfArticle_Container");




 _popUp_ctrl=document.querySelector("#popUp");
 _popUp_pic_a=document.querySelector("#popUp>a");
 _popUp_article_title=document.querySelector("#popUp>div>h1");
 _popUp_article_image=document.querySelector("#popUp>div>img");
 _popUp_article_desc=document.querySelector("#popUp>div>p");
 _popUp_article_a=document.querySelector("#popUp>div>a");
 _closePopUp=document.querySelector(".closePopUp");

// Events ----------------------------------------------------------

 window.addEventListener('load',GrabAllNews);

 _newsSrcAll.addEventListener('click',GrabAllNews);
 _newsSrc1.addEventListener('click',GrabEntertainment);
 _newsSrc2.addEventListener('click',GrabSports);
 _newsSrc3.addEventListener('click',GrabFinance);
 _newsSrc4.addEventListener('click',GrabTech);
 _newsSrc5.addEventListener('click',GrabNewYorkTimes);
 //_newsSrc6.addEventListener('click',GrabBloomberg);

 _listOfArticle_Container.addEventListener("click",unhidePOPUP);
 _closePopUp.addEventListener("click",hidePOPUP);


// Events Handlers ----------------------------------------------------------

function unhidePOPUP(e){
    console.log("Callback : Unhide the POPUP");
    var target = e.target;
    console.log(target);
    if (target.TagName != "ARTICLE") {
        console.log("you missed it, loser !!");
      	target = target.closest("ARTICLE");
        console.log("You got it  :" , target);

        console.log("Article ID : ",target.dataset.article_id);
        console.log("Article Title : ",target.dataset.title);
        console.log("Article Pub date : ",target.dataset.publishedDate);
        console.log("Article Author : ",target.dataset.author);
        console.log("Article description : ",target.dataset.description );
        console.log("Article url : ",target.dataset.url );
        console.log("Article Image URL : ",target.dataset.imageURL);
debugger
        //_popUp_pic_a=;
        _popUp_article_title.innerHTML = target.dataset.title;
        _popUp_article_image.src = target.dataset.imageURL;
        _popUp_article_desc.innerHTML= target.dataset.description;
        _popUp_article_a.innerHTML="Go to Website";
        _popUp_article_a.href=target.dataset.url ;
        _popUp_ctrl.classList.remove("hidden");
        _popUp_ctrl.classList.remove("loader");
debugger
      //  switch (target.dataset.src_id) {
      //     case 1:     _popUp_ctrl.classList.add("popUp_bg_NewSrc1") ; break;     
      //     case 2:     _popUp_ctrl.classList.add("popUp_bg_NewSrc2") ; break;     
      //     case 3:     _popUp_ctrl.classList.add("popUp_bg_NewSrc3") ; break;     
      //     case 4:     _popUp_ctrl.classList.add("popUp_bg_NewSrc4") ; break;     
      //     case 5:     _popUp_ctrl.classList.add("popUp_bg_NewSrc5") ; break;     
      //     default:    _popUp_ctrl.classList.add("popUp_bg_NewSrc1") ; break;     
      //  }
    }  
}



function hidePOPUP(e){
    console.log("Callback : hide the POPUP");
        //_popUp_pic_a=;
        _popUp_article_title.innerHTML = "";
        _popUp_article_image.src = "";
        _popUp_article_desc.innerHTML= "";
        _popUp_article_a.innerHTML="";
        _popUp_article_a.href="" ;
        _popUp_ctrl.classList.add("loader");
        _popUp_ctrl.classList.add("hidden");
}



function GrabAllNews(e) {
  console.log("Callback Grab Just10");
  Just10();
}


function Just10() {
  debugger
  flushCurrArticles();
        //c_max_article_id=2;  article_id = 0;  src_id=1;
        //loadArticles(src_id);
        add2_news(0,1,2);

        //c_max_article_id=4;  article_id = 2;  src_id=2;
        //loadArticles(src_id);
        add2_news(2,2,4);

        //c_max_article_id=6;  article_id = 4;  src_id=3;
        //loadArticles(src_id);
        add2_news(4,3,6);

        //c_max_article_id=8;  article_id = 6;  src_id=4;
        //loadArticles(src_id);
        add2_news(6,4,8);

        //c_max_article_id=10;  article_id = 8;  src_id=5;
        //loadArticles(src_id);
        add2_news(8,5,10);
  
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="All";
}


function add2_news (article_id, src_id, max_article_id){
    c_max_article_id=max_article_id;  
    article_id = article_id;  ;
    loadArticles(src_id);
}


function GrabEntertainment(e) {
  console.log("Callback GrabEntertainment");
  flushCurrArticles();
  c_max_article_id=10;
  article_id = 0;
  loadArticles(1);
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="Entertainment";
}

function GrabSports(e) {
  console.log("Callback GrabSports");
  flushCurrArticles();
  c_max_article_id=10;
  article_id = 0;
  loadArticles(2);
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="ESPN";
}

function GrabFinance(e) {
  console.log("Callback GrabFinance");
  flushCurrArticles();
  c_max_article_id=10;
  article_id = 0;
  loadArticles(3);
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="Bloomberg";
}

function GrabTech(e) {
  console.log("Callback GrabTech");
  flushCurrArticles();
  c_max_article_id=10;
  article_id = 0;
  loadArticles(4);
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="Tech Crunch";
}


function GrabNewYorkTimes(e) {
  console.log("Callback GrabTech");
  flushCurrArticles();
  c_max_article_id=10;
  article_id = 0;
  loadArticles(5);
  _srcAction.innerHTML = "Source : ";
  _selectedSrc.innerHTML="NewYorkTimes";
}

// Supporting functions  ----------------------------------------------------------


function loadArticles(src_id) {
  console.log("LoadArticles from Source: " + src_id );	
  console.log("article_id : " + article_id );  
  console.log("max_article_id: " + c_max_article_id );  
  var api_str = "";
  switch (src_id) {
  case 1 :
        api_str = c_api_url_NewsSrc1;
        x=$.getJSON(api_str, showArticles); 
        console.log('test after ShowArticle for src 1');
        break;
  case 2 :
        api_str = c_api_url_NewsSrc2;
        $.getJSON(api_str, showArticles); 
        console.log('test after ShowArticle for src 2');
        break;
  case 3 :
        api_str = c_api_url_NewsSrc3;
        $.getJSON(api_str, showArticles); 
        console.log('test after ShowArticle for src 3');
        break;
  case 4 :
        api_str = c_api_url_NewsSrc4;
        $.getJSON(api_str, showArticles); 
        console.log('test after ShowArticle for src 4');
        break;
  case 5 :
        api_str = c_api_url_NewsSrc5;
        $.getJSON(api_str, showArticles_NYT); 
        console.log('test after ShowArticle for src 5');
        break;
  default:
        api_str = c_api_url_NewsSrc1;
        $.getJSON(api_str, showArticles); 
        console.log('test after ShowArticle for src 4');
   }     
}


function showArticles(articleList){
  console.log("show loaded Articles here");
  debugger
  if (articleList == undefined) {
    alert("No article is loaded from 'NewsAPI' currently, pls try again later or choose another New Sources");
  	return;
  }
    console.log(articleList);
  debugger
    articleList.articles.forEach(showOneArticle);
	//console.log("Examine the JSON");
}



function showArticles_NYT(articleList){
  console.log("show loaded NYT Articles here");
  debugger
  if (articleList == undefined) {
    alert("No article can be loaded from NewYorTimes currently, pls try again later or choose another New Sources");
    return;
  }
    console.log(articleList);
    debugger
    articleList.results.forEach(showOneArticle_NYT);
}



  

function showOneArticle_NYT(oneArticlejson){
  console.log("Show one NYT article here");
  debugger
  console.log(oneArticlejson);
  console.log("c_max_article_id:", c_max_article_id);

  article_id+=1;
  if (article_id>c_max_article_id){
    return;
  }
    oneArticle=document.createElement("ARTICLE");
    oneArticle.dataset.article_id= article_id;
    oneArticle.dataset.url = oneArticlejson.url;
    debugger

    oneArticle.dataset.description = oneArticlejson.abstract;
    oneArticle.dataset.imageURL=oneArticlejson.media[0]["media-metadata"][0].url;
    oneArticle.dataset.title=oneArticlejson.title;
    oneArticle.dataset.publishedDate=oneArticlejson.published_date;
    oneArticle.dataset.author=oneArticlejson.byline;
    oneArticle.dataset.src_id=src_id;
    oneArticle.id=article_id;

    oneArticleSectionImg=document.createElement("SECTION");          //--- Image Src
    oneArticleSectionTitleContent=document.createElement("SECTION"); //--- Title + PubDate
    oneArticleSectionImpression=document.createElement("SECTION");   //--- Author
    oneArticle.className="article";
    oneArticleSectionDIV=document.createElement("DIV");   //--- Author


    oneArticleSectionTitleContent.className="articleContent";
    oneArticleSectionImpression.className="impressions";
    oneArticleSectionDIV.className= "clearfix";
    oneArticleSectionImgSrc=document.createElement("IMG");
    oneArticleSectionTitle=document.createElement("H3");
    oneArticleSectionPubDate=document.createElement("H6");

    oneArticleSectionImgSrc.src=oneArticle.dataset.imageURL;
    oneArticleSectionImgSrc.className="featuredImage";
    oneArticleSectionTitle.innerHTML=oneArticle.dataset.title;
    oneArticleSectionPubDate.innerHTML=oneArticle.dataset.publishedDate;
    oneArticleSectionImpression.innerHTML=oneArticle.dataset.author;

    oneArticleSectionImg.appendChild(oneArticleSectionImgSrc);
    oneArticleSectionTitleContent.appendChild(oneArticleSectionTitle);
    oneArticleSectionTitleContent.appendChild(oneArticleSectionPubDate);

    oneArticle.appendChild(oneArticleSectionImg);
    oneArticle.appendChild(oneArticleSectionTitleContent);
    oneArticle.appendChild(oneArticleSectionImpression);
    oneArticle.appendChild(oneArticleSectionDIV);

    _listOfArticle_Container.appendChild(oneArticle);

}

function showOneArticle(oneArticlejson){
	console.log("Show one article here");
  debugger
	var dummy_=oneArticlejson.publishedAt;
	var dummy ="";
    if (dummy_ != null) {
	    dummy= dummy_.substr(0,10);
    }
    article_id+=1;

  if (article_id>c_max_article_id){
    return;
  }
    oneArticle=document.createElement("ARTICLE");
    oneArticle.dataset.article_id= article_id;
    oneArticle.dataset.url = oneArticlejson.url;
    oneArticle.dataset.description = oneArticlejson.description;
    oneArticle.dataset.imageURL=oneArticlejson.urlToImage;
    oneArticle.dataset.title=oneArticlejson.title;
    oneArticle.dataset.publishedDate=dummy;
    oneArticle.dataset.src_id=src_id;
    oneArticle.dataset.author=oneArticlejson.author;
    oneArticle.id=article_id;

    oneArticleSectionImg=document.createElement("SECTION");          //--- Image Src
    oneArticleSectionTitleContent=document.createElement("SECTION"); //--- Title + PubDate
    oneArticleSectionImpression=document.createElement("SECTION");   //--- Author
    oneArticle.className="article";
    oneArticleSectionDIV=document.createElement("DIV");   //--- Author


    oneArticleSectionTitleContent.className="articleContent";
    oneArticleSectionImpression.className="impressions";
    oneArticleSectionDIV.className= "clearfix";
    oneArticleSectionImgSrc=document.createElement("IMG");
    oneArticleSectionTitle=document.createElement("H3");
    oneArticleSectionPubDate=document.createElement("H6");

    oneArticleSectionImgSrc.src=oneArticlejson.urlToImage;
    oneArticleSectionImgSrc.className="featuredImage";
    oneArticleSectionTitle.innerHTML=oneArticlejson.title;
    oneArticleSectionPubDate.innerHTML=dummy;
    oneArticleSectionImpression.innerHTML=oneArticlejson.author;

    oneArticleSectionImg.appendChild(oneArticleSectionImgSrc);
    oneArticleSectionTitleContent.appendChild(oneArticleSectionTitle);
    oneArticleSectionTitleContent.appendChild(oneArticleSectionPubDate);

    oneArticle.appendChild(oneArticleSectionImg);
    oneArticle.appendChild(oneArticleSectionTitleContent);
    oneArticle.appendChild(oneArticleSectionImpression);
    oneArticle.appendChild(oneArticleSectionDIV);

    _listOfArticle_Container.appendChild(oneArticle);
}


function flushCurrArticles(){
	console.log("Flush current articles !!");
	_listOfArticle_Container.innerHTML="";
}

Just10() ;
