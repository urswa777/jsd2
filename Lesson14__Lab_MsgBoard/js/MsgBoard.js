//localStorage.setItem('NAME','RYAN');

//var carString = JSON.stringify(car);
//localStorage.setItem('car', carString);
//var myCar = localStorage.getItem('car');

//----- Structure---------------------------------------
var _inputBox = document.querySelector(".form-control");
var _button = document.querySelector(".btn");
var _msgBoard = document.querySelector(".message-board");
var MsgCountStr="";
var msgBoard = {  "BoardName": "MemoryStack",
                  "MsgCount": "1",
                  "Msg": [
                           {
                             "uuid":"0",
                             "msgContent":"New message will appear here !!",
                             "like_count":"0",
                             "dislike_count":"0",
                             "timestamp":"",
                             "is_deleted":""
                           }
                         ]
                };

var dummy_msg=  {
                  "uuid":"-1",
                  "msgContent":"dummy",
                  "like_count":"0",
                  "dislike_count":"0",
                  "timestamp":"",
                  "is_deleted":""
                }

// Establish a connection with Firebase
var fbRef = new Firebase("https://msgboard-1f3d5.firebaseio.com");




//----- Events------------------------------------------
//Window.addEventListener('load',restoreMsg);
_button.addEventListener('click',sendMsg);
_msgBoard.addEventListener("click",delvoteMsg);


//----- Event Handlers ---------------------------------

function delvoteMsg(e){
	e.preventDefault();	
	console.log('delvoteMsg');
	console.log(e.target);

    if (target.TagName != "LI") {
        console.log("you missed it, loser !!");
    	target = target.closest(".fa-thumbs-up");
    }
//    console.log('What you got is : ' + target);

//     i_thumbup.className     ="fa fa-thumbs-up pull-right";
//     i_thumbdown.className   ="fa fa-thumbs-down pull-right";
//     i_trash.className       ="fa fa-trash pull-right delete";

}




function sendMsg(e){
	e.preventDefault();	
	console.log('sendMsg');
	console.log(_inputBox);
	displayOneNewMsg(storeNewMsg(_inputBox.value));
	_inputBox.value="";
}

function restoreMsg(e){
	e.preventDefault();
	console.log('restoreMsg');
	//console.log(_inputBox);
}

function storeNewMsg(msg){
	var oneNewMsg =          {
                             "uuid":"0",
                             "msgContent":" ",
                             "like_count":"0",
                             "dislike_count":"0",
                             "timestamp":"",
                             "is_deleted":"0"
                           };

    oneNewMsg.uuid = uuid();
    oneNewMsg.msgContent =msg;
    oneNewMsg.like_count=0;
    oneNewMsg.dislike_count=0;
    oneNewMsg.timestamp=Date();
    return oneNewMsg;
}

function displayOneNewMsg(msg){
	li=document.createElement("li");
    i_thumbup=document.createElement("i");
    i_thumbdown=document.createElement("i");
    i_trash=document.createElement("i");
    div_likecount=document.createElement("div");

     //--- Assign ClassNames ----------------
     i_thumbup.className     ="fa fa-thumbs-up pull-right";
     i_thumbdown.className   ="fa fa-thumbs-down pull-right";
     i_trash.className       ="fa fa-trash pull-right delete";
     div_likecount.className ="pull-right";

     //---- add to array ----
     msgBoard.Msg.push(msg);
     debugger
     msgBoard.MsgCount =   parseFloat(msgBoard.MsgCount) + 1;

     //--- Assign Values ----------------
     li.innerHTML = msg.msgContent ;
     li.dataset.uuid = msg.uuid;
     li.dataset.timestamp = msg.timestamp;
     div_likecount.innerHTML ="0";

    li.appendChild(i_trash);
    li.appendChild(i_thumbup);
    li.appendChild(i_thumbdown);
    li.appendChild(div_likecount);
    _msgBoard.appendChild(li);
};

function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}
