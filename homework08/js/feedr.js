 c_api_url_NewsSrc1="https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
 c_api_url_NewsSrc2="https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
 c_api_url_NewsSrc3="https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";
 c_api_url_NewsSrc4="https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=6191111e6f3145ef8b9f5c22e97751c7";

 var article_id = 0;

// Structure ----------------------------------------------------------

 _srcAction=document.querySelector(".Actions");
 _selectedSrc=document.querySelector(".NewsSrcName");
 _newsSrc1=document.querySelector(".NewsSrcEntertainment");
 _newsSrc2=document.querySelector(".NewsSrcSports");
 _newsSrc3=document.querySelector(".NewsSrcFinance");
 _newsSrc4=document.querySelector(".NewsSrcTech");
 _listOfArticle_Container=document.querySelector(".listOfArticle_Container");




 _popUp_ctrl=document.querySelector("#popUp");
 _popUp_pic_a=document.querySelector("#popUp>a");
 _popUp_article_title=document.querySelector("#popUp>div>h1");
 _popUp_article_image=document.querySelector("#popUp>div>img");
 _popUp_article_desc=document.querySelector("#popUp>div>p");
 _popUp_article_a=document.querySelector("#popUp>div>a");
 _closePopUp=document.querySelector(".closePopUp");

// Events ----------------------------------------------------------

 window.addEventListener('load',GrabReload);
 _newsSrc1.addEventListener('click',GrabEntertainment);
 _newsSrc2.addEventListener('click',GrabSports);
 _newsSrc3.addEventListener('click',GrabFinance);
 _newsSrc4.addEventListener('click',GrabTech);

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


        //_popUp_pic_a=;
        _popUp_article_title.innerHTML = target.dataset.title;
        _popUp_article_image.src = target.dataset.imageURL;
        _popUp_article_desc.innerHTML= target.dataset.description;
        _popUp_article_a.innerHTML="Go to Website";
        _popUp_article_a.href=target.dataset.url ;
        _popUp_ctrl.classList.remove("hidden");
        _popUp_ctrl.classList.remove("loader");
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

function GrabReload(e) {
  console.log("Callback : Initial Load");
  _srcAction.innerHTML = "Source Chosen : ";
  _selectedSrc.innerHTML="Entertainment";
  loadArticles(1);
  article_id = 0;
}

function GrabEntertainment(e) {
  console.log("Callback GrabEntertainment");
  _srcAction.innerHTML = "Source Chosen : ";
  _selectedSrc.innerHTML="Entertainment";
  loadArticles(1);
  article_id = 0;
}

function GrabSports(e) {
  console.log("Callback GrabSports");
  _srcAction.innerHTML = "Source Chosen : ";
  _selectedSrc.innerHTML="Sports";
  loadArticles(2);
  article_id = 0;
}

function GrabFinance(e) {
  console.log("Callback GrabFinance");
  _srcAction.innerHTML = "Source Chosen : ";
  _selectedSrc.innerHTML="Finance";
  loadArticles(3);
  article_id = 0;
}

function GrabTech(e) {
  console.log("Callback GrabTech");
  _srcAction.innerHTML = "Source Chosen : ";
  _selectedSrc.innerHTML="Tech";
  loadArticles(4);
  article_id = 0;
}


// Supporting functions  ----------------------------------------------------------


function loadArticles(newsSrcNo) {
  console.log("LoadArticles from Source" + newsSrcNo );	
  var api_str = "";
  switch (newsSrcNo) {
   case 1  : api_str=c_api_url_NewsSrc1; break;
   case 2  : api_str=c_api_url_NewsSrc2; break;
   case 3  : api_str=c_api_url_NewsSrc3; break;
   case 4  : api_str=c_api_url_NewsSrc4; break;
   default : api_str=c_api_url_NewsSrc1;
   }   
  $.getJSON(api_str, showArticles);

}


function showArticles(articleList){
  if (articleList == undefined) {
  	return;
  }
	console.log("show loaded Articles here");
    console.log(articleList);

    flushCurrArticles();
    articleList.articles.forEach(showOneArticle);
	//console.log("Examine the JSON");
}


function showOneArticle(oneArticlejson){
	console.log("Show one article here");
	var dummy_=oneArticlejson.publishedAt;
	var dummy ="";
    if (dummy_ != null) {
	    dummy= dummy_.substr(0,10);
    }
    article_id+=1;

    oneArticle=document.createElement("ARTICLE");
    oneArticle.dataset.article_id= article_id;
    oneArticle.dataset.url = oneArticlejson.url;
    oneArticle.dataset.description = oneArticlejson.description;
    oneArticle.dataset.imageURL=oneArticlejson.urlToImage;
    oneArticle.dataset.title=oneArticlejson.title;
    oneArticle.dataset.publishedDate=dummy;
    oneArticle.dataset.author=oneArticlejson.author;

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

loadArticles(1);
