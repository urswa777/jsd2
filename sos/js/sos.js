//------------------------------------------------------
//----- Core data : To-do-list object ------------------
//------------------------------------------------------
var c_max_task_listed =0;
var curr_firstShow_task_id =0;
var curr_todolist_id=0;
var to_do_list = initial_ToDoList_JSON.User[0];

var today_ = Date();
var displayDT = today_.substring(0, 7) + '-' + today_.substring(8, 10) + '-' + today_.substring(11, 16) + ' @' + today_.substring(16, 24);


console.log('Today is : ' + today_);
console.log('After format : ' + displayDT.trim());


//------------------------------------------------------
//----- Structure --------------------------------------
//------------------------------------------------------
var _header  = document.querySelector("header");

var _todolist_personal  = document.querySelector(".fa-home");
var _todolist_social    = document.querySelector(".fa-group");
var _todolist_secret    = document.querySelector(".fa-user-secret");
var _current_datetime   = document.querySelector(".sysdate");
_current_datetime.innerHTML = displayDT;

var _icon_calendarView  = document.querySelector(".fa-calendar");
var _icon_mapView       = document.querySelector(".fa-map-marker");
var _icon_peopleView    = document.querySelector(".fa-male");
var _icon_separator1    = document.querySelector(".separator1");
var _icon_separator2    = document.querySelector(".separator2");

var _icon_composeTask  = document.querySelector(".fa-plus-square");
var _icon_scrollDown1  = document.querySelector(".fa-sort-asc");
var _icon_scrollup1    = document.querySelector(".fa-sort-desc");
var _icon_nextPage     = document.querySelector(".fa-sticky-note-o");

var _icon_back2ListTop = document.querySelector(".fa-refresh");
var _icon_sharelist    = document.querySelector(".fa-user-plus");
var _icon_settings     = document.querySelector(".fa-gears");

var _list_openOnly     = document.querySelector(".list_OpenOnly");
var _list_allTasks     = document.querySelector(".list_AllTasks");
var _list_closedOnly   = document.querySelector(".List_ClosedOnly");
var _list_pendingOnly  = document.querySelector(".List_PendingOnly");
var _list_archive      = document.querySelector(".List_Archived");
var _list_pastDue      = document.querySelector(".List_PastDue");
var _list_touch3days   = document.querySelector(".List_Touch3Days");

var _articlePic1       = document.querySelector(".articlePic1");
var _articlePic2       = document.querySelector(".articlePic2");
var _articlePic3       = document.querySelector(".articlePic3");
var _articlePic4       = document.querySelector(".articlePic4");
var _articlePic5       = document.querySelector(".articlePic5");

var _popup_window      = document.querySelector("#popUp");
var _icon_closePopup   = document.querySelector(".closePopUp");
var _msg_todolist_name = document.querySelector("#msg_todolist_name");
var _msg_title         = document.querySelector("#msg_title");
var _msg_details       = document.querySelector("#msg_details");
var _msg_task_type     = document.querySelector("#msg_task_type");
var _msg_duedate       = document.querySelector("#msg_duedate");
var _msg_timeneeded    = document.querySelector("#msg_timeneeded");
var _msg_importance    = document.querySelector("#msg_importance");
var _msg_urgency       = document.querySelector("#msg_urgency");
var _msg_levelOfEffort = document.querySelector("#msg_levelOfEffort");
var _Post_button       = document.querySelector(".btn");

var _task1             = document.querySelector(".task1");
var _task2             = document.querySelector(".task2");
var _task3             = document.querySelector(".task3");
var _task4             = document.querySelector(".task4");
var _task5             = document.querySelector(".task5");
var _task1_drilldown   = document.querySelector(".task1_drilldown");
var _task2_drilldown   = document.querySelector(".task2_drilldown");
var _task3_drilldown   = document.querySelector(".task3_drilldown");
var _task4_drilldown   = document.querySelector(".task4_drilldown");
var _task5_drilldown   = document.querySelector(".task5_drilldown");

var _tk1_edit_task     = document.querySelector(".tk1_edit_task");
var _tk2_edit_task     = document.querySelector(".tk2_edit_task");
var _tk3_edit_task     = document.querySelector(".tk3_edit_task");
var _tk4_edit_task     = document.querySelector(".tk4_edit_task");
var _tk5_edit_task     = document.querySelector(".tk5_edit_task");

var _tk1_trash         = document.querySelector(".tk1_trash");
var _tk1_sendtask      = document.querySelector(".tk1_send_task");
var _tk1_priority      = document.querySelector(".tk1_priority");
var _tk1_add_priority  = document.querySelector(".tk1_add_priority");
var _tk1_sub_prioirty  = document.querySelector(".tk1_sub_prioirty");
var _tk1_complete      = document.querySelector(".tk1_complete");
var _tk1_dup_task      = document.querySelector(".tk1_dup_task");
var _tk1_love_task     = document.querySelector(".tk1_love_task");
var _tk1_show_details  = document.querySelector(".tk1_show_details");
var _tk1_notesClose    = document.querySelector(".closeNotes1");

var _tk2_trash         = document.querySelector(".tk2_trash");
var _tk2_sendtask      = document.querySelector(".tk2_send_task");
var _tk2_priority      = document.querySelector(".tk2_priority");
var _tk2_add_priority  = document.querySelector(".tk2_add_priority");
var _tk2_sub_prioirty  = document.querySelector(".tk2_sub_prioirty");
var _tk2_complete      = document.querySelector(".tk2_complete");
var _tk2_dup_task      = document.querySelector(".tk2_dup_task");
var _tk2_love_task     = document.querySelector(".tk2_love_task");
var _tk2_show_details  = document.querySelector(".tk2_show_details");
var _tk2_notesClose    = document.querySelector(".closeNotes2");

var _tk3_trash         = document.querySelector(".tk3_trash");
var _tk3_sendtask      = document.querySelector(".tk3_send_task");
var _tk3_priority      = document.querySelector(".tk3_priority");
var _tk3_add_priority  = document.querySelector(".tk3_add_priority");
var _tk3_sub_prioirty  = document.querySelector(".tk3_sub_prioirty");
var _tk3_complete      = document.querySelector(".tk3_complete");
var _tk3_dup_task      = document.querySelector(".tk3_dup_task");
var _tk3_love_task     = document.querySelector(".tk3_love_task");
var _tk3_show_details  = document.querySelector(".tk3_show_details");
var _tk3_notesClose    = document.querySelector(".closeNotes3");

var _tk4_trash         = document.querySelector(".tk4_trash");
var _tk4_sendtask      = document.querySelector(".tk4_send_task");
var _tk4_priority      = document.querySelector(".tk4_priority");
var _tk4_add_priority  = document.querySelector(".tk4_add_priority");
var _tk4_sub_prioirty  = document.querySelector(".tk4_sub_prioirty");
var _tk4_complete      = document.querySelector(".tk4_complete");
var _tk4_dup_task      = document.querySelector(".tk4_dup_task");
var _tk4_love_task     = document.querySelector(".tk4_love_task");
var _tk4_show_details  = document.querySelector(".tk4_show_details");
var _tk4_notesClose    = document.querySelector(".closeNotes4");

var _tk5_trash         = document.querySelector(".tk5_trash");
var _tk5_sendtask      = document.querySelector(".tk5_send_task");
var _tk5_priority      = document.querySelector(".tk5_priority");
var _tk5_add_priority  = document.querySelector(".tk5_add_priority");
var _tk5_sub_prioirty  = document.querySelector(".tk5_sub_prioirty");
var _tk5_complete      = document.querySelector(".tk5_complete");
var _tk5_dup_task      = document.querySelector(".tk5_dup_task");
var _tk5_love_task     = document.querySelector(".tk5_love_task");
var _tk5_show_details  = document.querySelector(".tk5_show_details");
var _tk5_notesClose    = document.querySelector(".closeNotes5");


//-------------------------------------------------------------------------------
var _tk1_title         = document.querySelector(".task1_title");
var _tk1_details       = document.querySelector(".task1_details");
var _tk1_dueDate       = document.querySelector(".task1_duedate");
var _tk1_time_remained = document.querySelector(".task1_time_remained");
var _tk1_type          = document.querySelector(".task1_type");
var _tk1_importance    = document.querySelector(".task1_importance");
var _tk1_urgency       = document.querySelector(".task1_urgency");
var _tk1_LOE           = document.querySelector(".task1_LOE");
var _tk1_notes         = document.querySelector(".task1_Notes");
var _tk1_status         = document.querySelector(".task1_status");

var _tk2_title         = document.querySelector(".task2_title");
var _tk2_details       = document.querySelector(".task2_details");
var _tk2_dueDate       = document.querySelector(".task2_duedate");
var _tk2_time_remained = document.querySelector(".task2_time_remained");
var _tk2_type          = document.querySelector(".task2_type");
var _tk2_importance    = document.querySelector(".task2_importance");
var _tk2_urgency       = document.querySelector(".task2_urgency");
var _tk2_LOE           = document.querySelector(".task2_LOE");
var _tk2_notes         = document.querySelector(".task2_Notes");
var _tk2_status        = document.querySelector(".task2_status");

var _tk3_title         = document.querySelector(".task3_title");
var _tk3_details       = document.querySelector(".task3_details");
var _tk3_dueDate       = document.querySelector(".task3_duedate");
var _tk3_time_remained = document.querySelector(".task3_time_remained");
var _tk3_type          = document.querySelector(".task3_type");
var _tk3_importance    = document.querySelector(".task3_importance");
var _tk3_urgency       = document.querySelector(".task3_urgency");
var _tk3_LOE           = document.querySelector(".task3_LOE");
var _tk3_notes         = document.querySelector(".task3_Notes");
var _tk3_status        = document.querySelector(".task3_status");

var _tk4_title         = document.querySelector(".task4_title");
var _tk4_details       = document.querySelector(".task4_details");
var _tk4_dueDate       = document.querySelector(".task4_duedate");
var _tk4_time_remained = document.querySelector(".task4_time_remained");
var _tk4_type          = document.querySelector(".task4_type");
var _tk4_importance    = document.querySelector(".task4_importance");
var _tk4_urgency       = document.querySelector(".task4_urgency");
var _tk4_LOE           = document.querySelector(".task4_LOE");
var _tk4_notes         = document.querySelector(".task4_Notes");
var _tk4_status        = document.querySelector(".task4_status");

var _tk5_title         = document.querySelector(".task5_title");
var _tk5_details       = document.querySelector(".task5_details");
var _tk5_dueDate       = document.querySelector(".task5_duedate");
var _tk5_time_remained = document.querySelector(".task5_time_remained");
var _tk5_type          = document.querySelector(".task5_type");
var _tk5_importance    = document.querySelector(".task5_importance");
var _tk5_urgency       = document.querySelector(".task5_urgency");
var _tk5_LOE           = document.querySelector(".task5_LOE");
var _tk5_notes         = document.querySelector(".task5_Notes");
var _tk5_status        = document.querySelector(".task5_status");




//------------------------------------------------------
//----- Add Events -------------------------------------
//------------------------------------------------------
window.addEventListener('load',              _e_load_task);

var _todolist_personal  = document.querySelector(".fa-home");
var _todolist_social    = document.querySelector(".fa-group");
var _todolist_secret    = document.querySelector(".fa-user-secret");

_todolist_personal.addEventListener('click',  _e_todolist_personal);
_todolist_social.addEventListener('click',    _e_todolist_social);
_todolist_secret.addEventListener('click',    _e_todolist_secret);


_icon_calendarView.addEventListener('click',  _e_icon_calendarView);
_icon_mapView.addEventListener('click',       _e_icon_mapView);
_icon_peopleView.addEventListener('click',    _e_icon_peopleView);

_icon_composeTask.addEventListener('click',  _e_composeTask);
_icon_scrollDown1.addEventListener('click',  _e_scrollDown1);
_icon_scrollup1.addEventListener('click',    _e_scrollUp1);
_icon_nextPage.addEventListener('click',     _e_nextPage);

_icon_back2ListTop.addEventListener('click', _e_back2ListTop);
_icon_settings.addEventListener('click',     _e_settings);
_icon_sharelist.addEventListener('click',    _e_sharelist);
_icon_closePopup.addEventListener('click',   _e_closePopup);
_Post_button.addEventListener('click',       _e_postTask);

_list_openOnly.addEventListener('click',     _e_go2ListOpenOnly);
_list_allTasks.addEventListener('click',     _e_go2ListAllTasks);
_list_closedOnly.addEventListener('click',   _e_go2ListClosedOnly);
_list_pendingOnly.addEventListener('click',  _e_go2ListPendingOnly);
_list_archive.addEventListener('click',      _e_go2ListArchive);
_list_pastDue.addEventListener('click',      _e_go2ListPastDue);
_list_touch3days.addEventListener('click',   _e_go2ListTouch3days);

_tk1_edit_task.addEventListener('click',     _e_tk1_edit_task);
_tk2_edit_task.addEventListener('click',     _e_tk2_edit_task);
_tk3_edit_task.addEventListener('click',     _e_tk3_edit_task);
_tk4_edit_task.addEventListener('click',     _e_tk4_edit_task);
_tk5_edit_task.addEventListener('click',     _e_tk5_edit_task);

_tk1_show_details.addEventListener('click',  _e_tk1_show_details);
_tk1_trash.addEventListener('click',         _e_tk1_trash);
_tk1_add_priority.addEventListener('click',  _e_tk1_add_priority);
_tk1_sub_prioirty.addEventListener('click',  _e_tk1_sub_priority);
_tk1_complete.addEventListener('click',      _e_tk1_complete);
_tk1_dup_task.addEventListener('click',      _e_tk1_dup_task);
_tk1_love_task.addEventListener('click',     _e_tk1_love_task);
_tk1_notesClose.addEventListener('click',    _e_tk1_notesClose);
_tk1_sendtask.addEventListener('click',      _e_tk1_sendTask);

_tk2_show_details.addEventListener('click',  _e_tk2_show_details);
_tk2_trash.addEventListener('click',         _e_tk2_trash);
_tk2_add_priority.addEventListener('click',  _e_tk2_add_priority);
_tk2_sub_prioirty.addEventListener('click',  _e_tk2_sub_priority);
_tk2_complete.addEventListener('click',      _e_tk2_complete);
_tk2_dup_task.addEventListener('click',      _e_tk2_dup_task);
_tk2_love_task.addEventListener('click',     _e_tk2_love_task);
_tk2_notesClose.addEventListener('click',    _e_tk2_notesClose);
_tk2_sendtask.addEventListener('click',      _e_tk2_sendTask);

_tk3_show_details.addEventListener('click',  _e_tk3_show_details);
_tk3_trash.addEventListener('click',         _e_tk3_trash);
_tk3_add_priority.addEventListener('click',  _e_tk3_add_priority);
_tk3_sub_prioirty.addEventListener('click',  _e_tk3_sub_priority);
_tk3_complete.addEventListener('click',      _e_tk3_complete);
_tk3_dup_task.addEventListener('click',      _e_tk3_dup_task);
_tk3_love_task.addEventListener('click',     _e_tk3_love_task);
_tk3_notesClose.addEventListener('click',    _e_tk3_notesClose);
_tk3_sendtask.addEventListener('click',      _e_tk3_sendTask);

_tk4_show_details.addEventListener('click',  _e_tk4_show_details);
_tk4_trash.addEventListener('click',         _e_tk4_trash);
_tk4_add_priority.addEventListener('click',  _e_tk4_add_priority);
_tk4_sub_prioirty.addEventListener('click',  _e_tk4_sub_priority);
_tk4_complete.addEventListener('click',      _e_tk4_complete);
_tk4_dup_task.addEventListener('click',      _e_tk4_dup_task);
_tk4_love_task.addEventListener('click',     _e_tk4_love_task);
_tk4_notesClose.addEventListener('click',    _e_tk4_notesClose);
_tk4_sendtask.addEventListener('click',      _e_tk4_sendTask);

_tk5_show_details.addEventListener('click',  _e_tk5_show_details);
_tk5_trash.addEventListener('click',         _e_tk5_trash);
_tk5_add_priority.addEventListener('click',  _e_tk5_add_priority);
_tk5_sub_prioirty.addEventListener('click',  _e_tk5_sub_priority);
_tk5_complete.addEventListener('click',      _e_tk5_complete);
_tk5_dup_task.addEventListener('click',      _e_tk5_dup_task);
_tk5_love_task.addEventListener('click',     _e_tk5_love_task);
_tk5_notesClose.addEventListener('click',    _e_tk5_notesClose);
_tk5_sendtask.addEventListener('click',      _e_tk5_sendTask);

//-------------------------------------------------------------
//-------- Events' call-back functions ------------------------
//-------------------------------------------------------------

function _e_todolist_personal(e){ 
	      console.log("inside callback fn '_e_todolist_personal' now !!");
          curr_firstShow_task_id =0;
          curr_todolist_id=0;
          _todolist_personal.classList.remove("todolist_personal_off");
          _todolist_personal.classList.add("todolist_personal_on");
          _todolist_social.classList.remove("todolist_social_on");
          _todolist_social.classList.add("todolist_social_off");
          _todolist_secret.classList.remove("todolist_secret_on");
          _todolist_secret.classList.add("todolist_secret_off");
          load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
          }
function _e_todolist_social(e){ 
	      console.log("inside callback fn '_e_todolist_social' now !!");
          curr_firstShow_task_id =0;
          curr_todolist_id=1;
          _todolist_personal.classList.remove("todolist_personal_on");
          _todolist_personal.classList.add("todolist_personal_off");
          _todolist_social.classList.remove("todolist_social_off");
          _todolist_social.classList.add("todolist_social_on");
          _todolist_secret.classList.remove("todolist_secret_on");
          _todolist_secret.classList.add("todolist_secret_off");
          load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
          }
function _e_todolist_secret(e){ 
	      console.log("inside callback fn '_e_todolist_secret' now !!");
          curr_firstShow_task_id =0;
          curr_todolist_id=2;
          _todolist_personal.classList.remove("todolist_personal_on");
          _todolist_personal.classList.add("todolist_personal_off");
          _todolist_social.classList.remove("todolist_social_on");
          _todolist_social.classList.add("todolist_social_off");
          _todolist_secret.classList.remove("todolist_secret_off");
          _todolist_secret.classList.add("todolist_secret_on");
          load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
          }

function _e_composeTask(e){ 
	      console.log("inside callback fn '_e_composeTask' now !!");
	         _task4_drilldown.classList.add("hideDrilldown");
	         _task4.classList.remove("article_with_notes");
	         _task3_drilldown.classList.add("hideDrilldown");
	         _task3.classList.remove("article_with_notes");
	         _task5_drilldown.classList.add("hideDrilldown");
	         _task5.classList.remove("article_with_notes");
	         _task1_drilldown.classList.add("hideDrilldown");
	         _task1.classList.remove("article_with_notes");
	         _task2_drilldown.classList.add("hideDrilldown");
	         _task2.classList.remove("article_with_notes");
	      _popup_window.classList.remove("hidden");
	      _popup_window.classList.remove("loader");
	      };

function _e_icon_calendarView(e){ 
	        console.log("inside callback fn '_e_icon_calendarView' now !!");
	      };
function _e_icon_mapView(e){ 
	        console.log("inside callback fn '_e_icon_mapView' now !!");
	      };
function _e_icon_peopleView(e){ 
	        console.log("inside callback fn '_e_icon_peopleView' now !!");
	      };

function _e_scrollUp1(e){ 
	        console.log("inside callback fn '_e_scollUp1' now !!");
	        if (to_do_list.List[curr_todolist_id].Msg.length - curr_firstShow_task_id > 5) {
	        	  curr_firstShow_task_id++;
                  load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
	        }
	    };

function _e_scrollDown1(e){ 
	        console.log("inside callback fn '_e_scrollDown1' now !!");
	        if (curr_firstShow_task_id - 1 >= 0) {
	        	  curr_firstShow_task_id--;
                  load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
	        }
	    };

function _e_tk1_sendTask(e){ console.log("inside callback fn '_e_tk1_sendTask' now !!"); };
function _e_tk2_sendTask(e){ console.log("inside callback fn '_e_tk2_sendTask' now !!"); };
function _e_tk3_sendTask(e){ console.log("inside callback fn '_e_tk3_sendTask' now !!"); };
function _e_tk4_sendTask(e){ console.log("inside callback fn '_e_tk4_sendTask' now !!"); };
function _e_tk5_sendTask(e){ console.log("inside callback fn '_e_tk5_sendTask' now !!"); };


function _e_nextPage(e){ console.log("inside callback fn '_e_nextPage' now !!"); };
function _e_back2ListTop(e){ console.log("inside callback fn '_e_back2ListTop' now !!"); };
function _e_settings(e){ console.log("inside callback fn '_e_settings' now !!"); };
function _e_sharelist(e){ console.log("inside callback fn '_e_sharelist' now !!"); };

function _e_closePopup(e){ 
	       console.log("inside callback fn '_e_closePopup' now !!")
	      _popup_window.classList.add("loader");
	      _popup_window.classList.add("hidden");
	       };
function _e_postTask(e){ console.log("inside callback fn '_e_postTask' now !!"); };

function _e_go2ListOpenOnly(e){ console.log("inside callback fn '_e_go2ListOpenOnly' now !!"); };
function _e_go2ListAllTasks(e){ console.log("inside callback fn '_e_go2ListAllTasks' now !!"); };
function _e_go2ListClosedOnly(e){ console.log("inside callback fn '_e_go2ListClosedOnly' now !!"); };
function _e_go2ListPendingOnly(e){ console.log("inside callback fn '_e_go2ListPendingOnly' now !!"); };
function _e_go2ListArchive(e){ console.log("inside callback fn '_e_go2ListArchive' now !!"); };
function _e_go2ListPastDue(e){ console.log("inside callback fn '_e_go2ListPastDue' now !!"); };
function _e_go2ListTouch3days(e){ console.log("inside callback fn '_e_go2ListTouch3days' now !!"); };

function _e_tk1_edit_task(e){ console.log("inside callback fn '_e_tk1_edit_task' now !!"); };
function _e_tk2_edit_task(e){ console.log("inside callback fn '_e_tk2_edit_task' now !!"); };
function _e_tk3_edit_task(e){ console.log("inside callback fn '_e_tk3_edit_task' now !!"); };
function _e_tk4_edit_task(e){ console.log("inside callback fn '_e_tk4_edit_task' now !!"); };
function _e_tk5_edit_task(e){ console.log("inside callback fn '_e_tk5_edit_task' now !!"); };

//----------------------------------------------------------------------------------
function _e_tk1_show_details(e){ 
	     console.log("inside callback fn '_e_tk1_show_details' now !!");
         _header.classList.add("headerBar_whenDrill");
         _icon_separator1.classList.add("separator_hide");
         _icon_separator2.classList.add("separator_hide");
         _task1_drilldown.classList.remove("hideDrilldown");
         _task1.classList.add("article_with_notes");
	         _task4_drilldown.classList.add("hideDrilldown");
	         _task4.classList.remove("article_with_notes");
	         _task3_drilldown.classList.add("hideDrilldown");
	         _task3.classList.remove("article_with_notes");
	         _task2_drilldown.classList.add("hideDrilldown");
	         _task2.classList.remove("article_with_notes");
	         _task5_drilldown.classList.add("hideDrilldown");
	         _task5.classList.remove("article_with_notes");
	    };
function _e_tk1_trash(e){ console.log("inside callback fn '_e_tk1_trash' now !!")};
function _e_tk1_add_priority(e){ 
	                 console.log("inside callback fn '_e_tk1_add_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id].priority;
	                 var y = parseInt(x) +1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id].priority = y.toString();
               		 _tk1_priority.innerHTML       = y.toString();
	                 };
function _e_tk1_sub_priority(e){ 
	                 console.log("inside callback fn '_e_tk1_sub_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id].priority;
	                 var y = parseInt(x) -1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id].priority = y.toString();
               		 _tk1_priority.innerHTML       = y.toString();
	                 };
function _e_tk1_complete(e){ console.log("inside callback fn '_e_tk1_complete' now !!")};
function _e_tk1_add_notes(e){ console.log("inside callback fn '_e_tk1_add_notes' now !!")};
function _e_tk1_edit_task(e){ console.log("inside callback fn '_e_tk1_edit_task' now !!")};
function _e_tk1_dup_task(e){ console.log("inside callback fn '_e_tk1_dup_task' now !!")};
function _e_tk1_love_task(e){ console.log("inside callback fn '_e_tk1_love_task' now !!")};
function _e_tk1_notesCount(e){ console.log("inside callback fn '_e_tk1_notesCount' now !!")};
function _e_tk1_notesClose(e){ 
	     console.log("inside callback fn '_e_tk1_notesClose' now !!");
         _task1_drilldown.classList.add("hideDrilldown");
         _task1.classList.remove("article_with_notes");
         _header.classList.remove("headerBar_whenDrill");
         _icon_separator1.classList.remove("separator_hide");
         _icon_separator2.classList.remove("separator_hide");
   	 };

//----------------------------------------------------------------------------------
function _e_tk2_show_details(e){ 
	     console.log("inside callback fn '_e_tk2_show_details' now !!");
         _header.classList.add("headerBar_whenDrill");
         _icon_separator1.classList.add("separator_hide");
         _icon_separator2.classList.add("separator_hide");
         _task2_drilldown.classList.remove("hideDrilldown");
         _task2.classList.add("article_with_notes");
	         _task4_drilldown.classList.add("hideDrilldown");
	         _task4.classList.remove("article_with_notes");
	         _task3_drilldown.classList.add("hideDrilldown");
	         _task3.classList.remove("article_with_notes");
	         _task5_drilldown.classList.add("hideDrilldown");
	         _task5.classList.remove("article_with_notes");
	         _task1_drilldown.classList.add("hideDrilldown");
	         _task1.classList.remove("article_with_notes");
	    };
function _e_tk2_trash(e){ console.log("inside callback fn '_e_tk2_trash' now !!")};
function _e_tk2_add_priority(e){ 
	                 console.log("inside callback fn '_e_tk2_add_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+1].priority;
	                 var y = parseInt(x) +1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+1].priority = y.toString();
               		 _tk2_priority.innerHTML       = y.toString();
	                 };
function _e_tk2_sub_priority(e){ 
	                 console.log("inside callback fn '_e_tk2_sub_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+1].priority;
	                 var y = parseInt(x) -1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+1].priority = y.toString();
               		 _tk2_priority.innerHTML       = y.toString();
	                 };
function _e_tk2_complete(e){ console.log("inside callback fn '_e_tk2_complete' now !!")};
function _e_tk2_add_notes(e){ console.log("inside callback fn '_e_tk2_add_notes' now !!")};
function _e_tk2_edit_task(e){ console.log("inside callback fn '_e_tk2_edit_task' now !!")};
function _e_tk2_dup_task(e){ console.log("inside callback fn '_e_tk2_dup_task' now !!")};
function _e_tk2_love_task(e){ console.log("inside callback fn '_e_tk2_love_task' now !!")};
function _e_tk2_notesCount(e){ console.log("inside callback fn '_e_tk2_notesCount' now !!")};
function _e_tk2_notesClose(e){ 
	     console.log("inside callback fn '_e_tk2_notesClose' now !!");
         _task2_drilldown.classList.add("hideDrilldown");
         _task2.classList.remove("article_with_notes");
         _header.classList.remove("headerBar_whenDrill");
         _icon_separator1.classList.remove("separator_hide");
         _icon_separator2.classList.remove("separator_hide");
    	 };


//----------------------------------------------------------------------------------
function _e_tk3_show_details(e){ 
	     console.log("inside callback fn '_e_tk3_show_details' now !!");
         _header.classList.add("headerBar_whenDrill");
         _icon_separator1.classList.add("separator_hide");
         _icon_separator2.classList.add("separator_hide");
         _task3_drilldown.classList.remove("hideDrilldown");
         _task3.classList.add("article_with_notes");
	         _task4_drilldown.classList.add("hideDrilldown");
	         _task4.classList.remove("article_with_notes");
	         _task5_drilldown.classList.add("hideDrilldown");
	         _task5.classList.remove("article_with_notes");
	         _task2_drilldown.classList.add("hideDrilldown");
	         _task2.classList.remove("article_with_notes");
	         _task1_drilldown.classList.add("hideDrilldown");
	         _task1.classList.remove("article_with_notes");
	    };
function _e_tk3_trash(e){ console.log("inside callback fn '_e_tk3_trash' now !!")};
function _e_tk3_add_priority(e){ 
	                 console.log("inside callback fn '_e_tk3_add_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+2].priority;
	                 var y = parseInt(x) +1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+2].priority = y.toString();
               		 _tk3_priority.innerHTML       = y.toString();
	                 };

function _e_tk3_sub_priority(e){ 
	                 console.log("inside callback fn '_e_tk3_sub_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+2].priority;
	                 var y = parseInt(x) -1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+2].priority = y.toString();
               		 _tk3_priority.innerHTML       = y.toString();
	                 };

function _e_tk3_complete(e){ console.log("inside callback fn '_e_tk3_complete' now !!")};
function _e_tk3_add_notes(e){ console.log("inside callback fn '_e_tk3_add_notes' now !!")};
function _e_tk3_edit_task(e){ console.log("inside callback fn '_e_tk3_edit_task' now !!")};
function _e_tk3_dup_task(e){ console.log("inside callback fn '_e_tk3_dup_task' now !!")};
function _e_tk3_love_task(e){ console.log("inside callback fn '_e_tk3_love_task' now !!")};
function _e_tk3_notesCount(e){ console.log("inside callback fn '_e_tk3_notesCount' now !!")};
function _e_tk3_notesClose(e){ 
	     console.log("inside callback fn '_e_tk3_notesClose' now !!");
         _task3_drilldown.classList.add("hideDrilldown");
         _task3.classList.remove("article_with_notes");
         _header.classList.remove("headerBar_whenDrill");
         _icon_separator1.classList.remove("separator_hide");
         _icon_separator2.classList.remove("separator_hide");
    	 };


//----------------------------------------------------------------------------------
function _e_tk4_show_details(e){ 
	     console.log("inside callback fn '_e_tk4_show_details' now !!");
         _header.classList.add("headerBar_whenDrill");
         _icon_separator1.classList.add("separator_hide");
         _icon_separator2.classList.add("separator_hide");
         _task4_drilldown.classList.remove("hideDrilldown");
         _task4.classList.add("article_with_notes");
	         _task5_drilldown.classList.add("hideDrilldown");
	         _task5.classList.remove("article_with_notes");
	         _task3_drilldown.classList.add("hideDrilldown");
	         _task3.classList.remove("article_with_notes");
	         _task2_drilldown.classList.add("hideDrilldown");
	         _task2.classList.remove("article_with_notes");
	         _task1_drilldown.classList.add("hideDrilldown");
	         _task1.classList.remove("article_with_notes");
	    };
function _e_tk4_trash(e){ console.log("inside callback fn '_e_tk4_trash' now !!")};
function _e_tk4_add_priority(e){ 
	                 console.log("inside callback fn '_e_tk4_add_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+3].priority;
	                 var y = parseInt(x) +1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+3].priority = y.toString();
               		 _tk4_priority.innerHTML       = y.toString();
	                 };

function _e_tk4_sub_priority(e){ 
	                 console.log("inside callback fn '_e_tk4_sub_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+3].priority;
	                 var y = parseInt(x) -1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+3].priority = y.toString();
               		 _tk4_priority.innerHTML       = y.toString();
	                 };
function _e_tk4_complete(e){ console.log("inside callback fn '_e_tk4_complete' now !!")};
function _e_tk4_add_notes(e){ console.log("inside callback fn '_e_tk4_add_notes' now !!")};
function _e_tk4_edit_task(e){ console.log("inside callback fn '_e_tk4_edit_task' now !!")};
function _e_tk4_dup_task(e){ console.log("inside callback fn '_e_tk4_dup_task' now !!")};
function _e_tk4_love_task(e){ console.log("inside callback fn '_e_tk4_love_task' now !!")};
function _e_tk4_notesCount(e){ console.log("inside callback fn '_e_tk4_notesCount' now !!")};
function _e_tk4_notesClose(e){ 
	     console.log("inside callback fn '_e_tk4_notesClose' now !!");
         _task4_drilldown.classList.add("hideDrilldown");
         _task4.classList.remove("article_with_notes");
         _header.classList.remove("headerBar_whenDrill");
         _icon_separator1.classList.remove("separator_hide");
         _icon_separator2.classList.remove("separator_hide");
    	 };


//----------------------------------------------------------------------------------
function _e_tk5_show_details(e){ 
	     console.log("inside callback fn '_e_tk5_show_details' now !!");
         _header.classList.add("headerBar_whenDrill");
         _icon_separator1.classList.add("separator_hide");
         _icon_separator2.classList.add("separator_hide");
         _task5_drilldown.classList.remove("hideDrilldown");
         _task5.classList.add("article_with_notes");

	         _task4_drilldown.classList.add("hideDrilldown");
	         _task4.classList.remove("article_with_notes");
	         _task3_drilldown.classList.add("hideDrilldown");
	         _task3.classList.remove("article_with_notes");
	         _task2_drilldown.classList.add("hideDrilldown");
	         _task2.classList.remove("article_with_notes");
	         _task1_drilldown.classList.add("hideDrilldown");
	         _task1.classList.remove("article_with_notes");
	    };
function _e_tk5_trash(e){ console.log("inside callback fn '_e_tk5_trash' now !!")};
function _e_tk5_add_priority(e){
	                 console.log("inside callback fn '_e_tk5_add_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+4].priority;
	                 var y = parseInt(x) +1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+4].priority = y.toString();
               		 _tk5_priority.innerHTML       = y.toString();
	                 };

function _e_tk5_sub_priority(e){        
	                 console.log("inside callback fn '_e_tk5_sub_priority' now !!");
	                 var x = to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+4].priority;
	                 var y = parseInt(x) -1;
	                 to_do_list.List[curr_todolist_id].Msg[curr_firstShow_task_id+4].priority = y.toString();
               		 _tk5_priority.innerHTML       = y.toString();
	                 };

function _e_tk5_complete(e){ console.log("inside callback fn '_e_tk5_complete' now !!")};
function _e_tk5_add_notes(e){ console.log("inside callback fn '_e_tk5_add_notes' now !!")};
function _e_tk5_edit_task(e){ console.log("inside callback fn '_e_tk5_edit_task' now !!")};
function _e_tk5_dup_task(e){ console.log("inside callback fn '_e_tk5_dup_task' now !!")};
function _e_tk5_love_task(e){ console.log("inside callback fn '_e_tk5_love_task' now !!")};
function _e_tk5_notesCount(e){ console.log("inside callback fn '_e_tk5_notesCount' now !!")};
function _e_tk5_notesClose(e){ 
	     console.log("inside callback fn '_e_tk5_notesClose' now !!");
         _task5_drilldown.classList.add("hideDrilldown");
         _task5.classList.remove("article_with_notes");
         _header.classList.remove("headerBar_whenDrill");
         _icon_separator1.classList.remove("separator_hide");
         _icon_separator2.classList.remove("separator_hide");
    	 };





//------------------------------------------------------------------------
// Establish a connection with Firebase --------------------------------
 var fbRef = new Firebase("https://sos7-37957.firebaseio.com");
//------------------------------------------------------------------------

//---------------------------------------------------------------------
//--------- new way ?? ------------------------------------------------
//---------------------------------------------------------------------
// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyDiu-guTL-2JBvIetP3Qa6sBiqfy9m-OBY",
//    authDomain: "sos7-37957.firebaseapp.com",
//    databaseURL: "https://sos7-37957.firebaseio.com",
//    storageBucket: "sos7-37957.appspot.com",
//  };
//  firebase.initializeApp(config);

//  https://sos7-37957.firebaseio.com/






// hideDrilldown
//-----------------------------------------------------------------
//-------  Supporting Functions  ----------------------------------
//-----------------------------------------------------------------
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




function _e_load_task(e) {
     //-----------------------------------------------------------------------------------------
	 // add a function to sort the tasks based on the descending Priority ----------------------
     //-----------------------------------------------------------------------------------------
     load_tasks(to_do_list, curr_todolist_id, curr_firstShow_task_id);
}
//------------------------------------------------------------------------------------------------------
//---- need some calculation here to load the stored data and re-order based on their priorities -------
//------------------------------------------------------------------------------------------------------


function load_tasks(to_do_list, todolist_id, start_task_id) {

//-------------------------------------------------------
//------------ dynamic pic ------------------------------
//-------------------------------------------------------
var picDraw = Date();
var articleImage1 = picDraw.substring(23, 24);
var pic1 = parseInt(articleImage1); 
var pic2 = (pic1 + 1 )%10; 
var pic3 = (pic1 + 2 )%10; 
var pic4 = (pic1 + 3 )%10; 
var pic5 = (pic1 + 4 )%10; 
debugger

var  articleImage1_str= "images/inspirational0" + pic1 + ".jpg";
var  articleImage2_str= "images/inspirational0" + pic2 + ".jpg";
var  articleImage3_str= "images/inspirational0" + pic3 + ".jpg";
var  articleImage4_str= "images/inspirational0" + pic4 + ".jpg";
var  articleImage5_str= "images/inspirational0" + pic5 + ".jpg";

_articlePic1.src = articleImage1_str;
_articlePic2.src = articleImage2_str;
_articlePic3.src = articleImage3_str;
_articlePic4.src = articleImage4_str;
_articlePic5.src = articleImage5_str;

//-------------------------------------------------------
//------------ dynamic pic ------------------------------
//-------------------------------------------------------

//-------------------------------------------
//--- fill in Task #1 -----------------------
//to_do_list.List[0].Msg[0].uuid             
  if (to_do_list.List[todolist_id].Msg.length > 0) {
        _task1.classList.remove("task1_hide");
        _task1.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id].uuid;
		_tk1_title.innerHTML          = to_do_list.List[todolist_id].Msg[start_task_id].msg_title;
		_tk1_priority.innerHTML       = to_do_list.List[todolist_id].Msg[start_task_id].priority;
		// _tk1_time_remained.innerHTML  = need calculation ;
		_tk1_type.innerHTML           = 'Task Type  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_task_type;
		_tk1_importance.innerHTML     = 'Importance  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_importance;
		_tk1_urgency.innerHTML        = 'Urgency  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_urgency;
		_tk1_LOE.innerHTML            = 'Level of Effort  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_levelOfEffort;
		_tk1_details.innerHTML        = 'Details : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_details;
		_tk1_dueDate.innerHTML        = 'Due Date  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_due_date;
		_tk1_status.innerHTML         = 'Status  : ' + to_do_list.List[todolist_id].Msg[start_task_id].msg_status;

        if (to_do_list.List[todolist_id].Msg[start_task_id].Notes.length >0) {
		        for (i=0;i<to_do_list.List[todolist_id].Msg[start_task_id].Notes.length;i++){
		                 li_notes = document.createElement("LI");
				         li_notes.innerHTML = to_do_list.List[todolist_id].Msg[start_task_id].Notes[i].update_datetime
		                                    + " - " + to_do_list.List[todolist_id].Msg[start_task_id].Notes[i].update_msg;
		                 _tk1_notes.appendChild(li_notes);
		        } 
            }

		if (to_do_list.List[todolist_id].Msg[start_task_id].is_completed=="1") {
                _tk1_status.classList.remove("status-open");
    		    _task1_drilldown.classList.add("drilldown_completedTask");
		   //  _task1.classList.add("article_with_notes_completed");
		   //  _task1.classList.add("article_completed");
		} else if (to_do_list.List[todolist_id].Msg[start_task_id].is_completed=="0") {
                _tk1_status.classList.add("status-open");
        }
		// _tk1_Notes.innerHTML          = to_do_list.List[0].Msg[0].msg_title;
		// -------------- LOOP to add CreateElement("LI"); based on the number of elements in the NOTES array -----
		//---------------------------------------------------------------------------------------------------------
    }
 else {
      _task1.classList.add("task1_hide");
 }   


//-------------------------------------------
//--- fill in Task #2 -----------------------
//to_do_list.List[0].Msg[1].uuid             
  if (to_do_list.List[todolist_id].Msg.length > 1) {
        _task2.classList.remove("task2_hide");
        _task2.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id+1].uuid;
		_tk2_title.innerHTML          = to_do_list.List[todolist_id].Msg[start_task_id+1].msg_title;
		_tk2_priority.innerHTML       = to_do_list.List[todolist_id].Msg[start_task_id+1].priority;
		// _tk2_time_remained.innerHTML  = need calculation ;
		_tk2_type.innerHTML           = 'Task Type  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_task_type;
		_tk2_importance.innerHTML     = 'Importance  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_importance;
		_tk2_urgency.innerHTML        = 'Urgency  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_urgency;
		_tk2_LOE.innerHTML            = 'Level of Effort  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_levelOfEffort;
		_tk2_details.innerHTML        = 'Details : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_details;
		_tk2_dueDate.innerHTML        = 'Due Date  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_due_date;
		_tk2_status.innerHTML         = 'Status  : ' + to_do_list.List[todolist_id].Msg[start_task_id+1].msg_status;

        if (to_do_list.List[todolist_id].Msg[start_task_id+1].Notes.length >0) {
		        for (i=0;i<to_do_list.List[todolist_id].Msg[start_task_id+1].Notes.length;i++){
		                 li_notes = document.createElement("LI");
				         li_notes.innerHTML = to_do_list.List[todolist_id].Msg[start_task_id+1].Notes[i].update_datetime
		                                    + " - " + to_do_list.List[todolist_id].Msg[start_task_id+1].Notes[i].update_msg;
		                 _tk2_notes.appendChild(li_notes);
		        } 
            }

		if (to_do_list.List[todolist_id].Msg[start_task_id+1].is_completed=="1") {
                _tk2_status.classList.remove("status-open");
		        _task2_drilldown.classList.add("drilldown_completedTask");
		   //  _task2.classList.add("article_with_notes_completed");
		   //  _task2.classList.add("article_completed");
		} else if (to_do_list.List[todolist_id].Msg[start_task_id+1].is_completed=="0") {
                _tk2_status.classList.add("status-open");
        }


		// _tk1_Notes.innerHTML          = to_do_list.List[0].Msg[0].msg_title;
		// -------------- LOOP to add CreateElement("LI"); based on the number of elements in the NOTES array -----
		//---------------------------------------------------------------------------------------------------------
    }
  else {
       _task2.classList.add("task2_hide");
  }  


//-------------------------------------------
//--- fill in Task #3 -----------------------
//to_do_list.List[0].Msg[0].uuid             
  if (to_do_list.List[todolist_id].Msg.length > 2) {
        _task3.classList.remove("task3_hide");
        _task3.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id+2].uuid;
		_tk3_title.innerHTML          = to_do_list.List[todolist_id].Msg[start_task_id+2].msg_title;
		_tk3_priority.innerHTML       = to_do_list.List[todolist_id].Msg[start_task_id+2].priority;
		// _tk3_time_remained.innerHTML  = need calculation ;
		_tk3_type.innerHTML           = 'Task Type  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_task_type;
		_tk3_importance.innerHTML     = 'Importance  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_importance;
		_tk3_urgency.innerHTML        = 'Urgency  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_urgency;
		_tk3_LOE.innerHTML            = 'Level of Effort  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_levelOfEffort;
		_tk3_details.innerHTML        = 'Details : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_details;
		_tk3_dueDate.innerHTML        = 'Due Date  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_due_date;
		_tk3_status.innerHTML         = 'Status  : ' + to_do_list.List[todolist_id].Msg[start_task_id+2].msg_status;

        if (to_do_list.List[todolist_id].Msg[start_task_id+2].Notes.length >0) {
		        for (i=0;i<to_do_list.List[todolist_id].Msg[start_task_id+2].Notes.length;i++){
		                 li_notes = document.createElement("LI");
				         li_notes.innerHTML = to_do_list.List[todolist_id].Msg[start_task_id+2].Notes[i].update_datetime
		                                    + " - " + to_do_list.List[todolist_id].Msg[start_task_id+2].Notes[i].update_msg;
		                 _tk3_notes.appendChild(li_notes);
		        } 
            }

		if (to_do_list.List[todolist_id].Msg[start_task_id+2].is_completed=="1") {
                _tk3_status.classList.remove("status-open");
		       _task3_drilldown.classList.add("drilldown_completedTask");
		   //  _task3.classList.add("article_with_notes_completed");
		   //  _task3.classList.add("article_completed");
		} else if (to_do_list.List[todolist_id].Msg[start_task_id+2].is_completed=="0") {
                _tk3_status.classList.add("status-open");
        }

		// _tk1_Notes.innerHTML          = to_do_list.List[0].Msg[0].msg_title;
		// -------------- LOOP to add CreateElement("LI"); based on the number of elements in the NOTES array -----
		//---------------------------------------------------------------------------------------------------------
    }
  else {
       _task3.classList.add("task3_hide");
  }  






//-------------------------------------------
//--- fill in Task #4 -----------------------
//to_do_list.List[0].Msg[0].uuid             
  if (to_do_list.List[todolist_id].Msg.length > 3) {
        _task4.classList.remove("task4_hide");
        _task4.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id+3].uuid;
        _task4.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id+3].uuid;
		_tk4_title.innerHTML          = to_do_list.List[todolist_id].Msg[start_task_id+3].msg_title;
		_tk4_priority.innerHTML       = to_do_list.List[todolist_id].Msg[start_task_id+3].priority;
		// _tk4_time_remained.innerHTML  = need calculation ;
		_tk4_type.innerHTML           = 'Task Type  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_task_type;
		_tk4_importance.innerHTML     = 'Importance  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_importance;
		_tk4_urgency.innerHTML        = 'Urgency  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_urgency;
		_tk4_LOE.innerHTML            = 'Level of Effort  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_levelOfEffort;
		_tk4_details.innerHTML        = 'Details : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_details;
		_tk4_dueDate.innerHTML        = 'Due Date  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_due_date;
		_tk4_status.innerHTML         = 'Status  : ' + to_do_list.List[todolist_id].Msg[start_task_id+3].msg_status;

        if (to_do_list.List[todolist_id].Msg[start_task_id+3].Notes.length >0) {
		        for (i=0;i<to_do_list.List[todolist_id].Msg[start_task_id+3].Notes.length;i++){
		                 li_notes = document.createElement("LI");
				         li_notes.innerHTML = to_do_list.List[todolist_id].Msg[start_task_id+3].Notes[i].update_datetime
		                                    + " - " + to_do_list.List[todolist_id].Msg[start_task_id+3].Notes[i].update_msg;
		                 _tk4_notes.appendChild(li_notes);
		        } 
            }

		if (to_do_list.List[todolist_id].Msg[start_task_id+3].is_completed=="1") {
                _tk4_status.classList.remove("status-open");
   		        _task4_drilldown.classList.add("drilldown_completedTask");
		   //  _task4.classList.add("article_with_notes_completed");
		   //  _task4.classList.add("article_completed");
		} else if (to_do_list.List[todolist_id].Msg[start_task_id+3].is_completed=="0") {
                _tk4_status.classList.add("status-open");
        }


		// _tk1_Notes.innerHTML          = to_do_list.List[0].Msg[0].msg_title;
		// -------------- LOOP to add CreateElement("LI"); based on the number of elements in the NOTES array -----
		//---------------------------------------------------------------------------------------------------------
    }
  else {
       _task4.classList.add("task4_hide");
  }  





//-------------------------------------------
//--- fill in Task #5 -----------------------
//to_do_list.List[0].Msg[0].uuid             
  if (to_do_list.List[todolist_id].Msg.length > 4) {
        _task5.classList.remove("task5_hide");
        _task5.dataset.uuid           = to_do_list.List[todolist_id].Msg[start_task_id+4].uuid;       
		_tk5_title.innerHTML          = to_do_list.List[todolist_id].Msg[start_task_id+4].msg_title;
		_tk5_priority.innerHTML       = to_do_list.List[todolist_id].Msg[start_task_id+4].priority;
		// _tk5_time_remained.innerHTML  = need calculation ;
		_tk5_type.innerHTML           = 'Task Type  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_task_type;
		_tk5_importance.innerHTML     = 'Importance  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_importance;
		_tk5_urgency.innerHTML        = 'Urgency  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_urgency;
		_tk5_LOE.innerHTML            = 'Level of Effort  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_levelOfEffort;
		_tk5_details.innerHTML        = 'Details : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_details;
		_tk5_dueDate.innerHTML        = 'Due Date  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_due_date;
		_tk5_status.innerHTML         = 'Status  : ' + to_do_list.List[todolist_id].Msg[start_task_id+4].msg_status;

        if (to_do_list.List[todolist_id].Msg[start_task_id+4].Notes.length >0) {
		        for (i=0;i<to_do_list.List[todolist_id].Msg[start_task_id+4].Notes.length;i++){
		                 li_notes = document.createElement("LI");
				         li_notes.innerHTML = to_do_list.List[todolist_id].Msg[start_task_id+4].Notes[i].update_datetime
		                                    + " - " + to_do_list.List[todolist_id].Msg[start_task_id+4].Notes[i].update_msg;
		                 _tk5_notes.appendChild(li_notes);
		        } 
            }

		if (to_do_list.List[todolist_id].Msg[start_task_id+4].is_completed=="1") {
                _tk5_status.classList.remove("status-open");
  		        _task5_drilldown.classList.add("drilldown_completedTask");
		    // _task5.classList.add("article_with_notes_completed");
		    // _task5.classList.add("article_completed");
		} else if (to_do_list.List[todolist_id].Msg[start_task_id+4].is_completed=="0") {
                _tk5_status.classList.add("status-open");
        }


		// _tk1_Notes.innerHTML          = to_do_list.List[0].Msg[0].msg_title;
		// -------------- LOOP to add CreateElement("LI"); based on the number of elements in the NOTES array -----
		//---------------------------------------------------------------------------------------------------------
    }
  else {
       _task5.classList.add("task5_hide");
  }  

}




/*
var to_do_list = {  "Last_modified_date":"2016-09-04",
                    "List":
    	                 [ 
 		                     {
			                  "Name": "Primary",
		                      "Msg": [
		                           {
		                             "uuid":"4",
		                             "msg_title":"Build the visual first (html/css) for to-do-list view!!",
		                             "msg_details":"Think about all features, layout & UI flow !!",
		                             "msg_task_type":"Project",
		                             "msg_due_data":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"5",
		                             "created_timestamp":"2016-09-03",
		                             "is_deleted":"0"

*/