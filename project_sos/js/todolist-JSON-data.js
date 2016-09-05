//------------------------------------------------------
//----- Core data : To-do-list object ------------------
//------------------------------------------------------

var to_do_list = {  "Last_modified_date":"2016-09-04",
                    "List":
    	                 [
 		                     {
			                  "Name": "Primary",
                              "created_date":"2016-09-04",
		                      "Msg": [
		                           {
		                             "uuid":"4",
		                             "msg_title":"Build the visual first (html/css) for to-do-list view!!",
		                             "msg_details":"Think about all features, layout & UI flow so HTML/CSS work !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"5",
		                             "msg_urgency":"5",
		                             "msg_status":"Closed",
		                             "msg_levelOfEffort":"3",
		                             "like_count":"0",
		                             "priority":"15",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-03 03:00am",
		                             "completed_ts":"2016-09-03 11:56pm",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"5",
		                             "msg_title":"Build the static-form for task/message input !!",
		                             "msg_details":"Think about all features, layout & UI flow so HTML/CSS work !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"4",
		                             "msg_urgency":"4",
		                             "msg_status":"Closed",
		                             "msg_levelOfEffort":"2",
		                             "like_count":"0",
		                             "priority":"11",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-04 06:00am",
		                             "completed_ts":"2016-09-04 08:11am",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"6",
		                             "msg_title":"Build Javascript structure to show static data in the to-do-list view !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"5",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"6",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-04 07:00pm",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"7",
		                             "msg_title":"Make the input-form for messages(Task,reminder,...etc) to work & store in variable!!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"7",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"8",
		                             "msg_title":"Enable the Message form to work !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"9",
		                             "msg_title":"Retrieve the message from Firebase !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"2",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"10",
		                             "msg_title":"Edit the message from Firebase and Save it back !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"11",
		                             "msg_title":"Enable the Thumb Up and Down feature to change the Priority count !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"12",
		                             "msg_title":"Enable the REFRESH feature to change the display order by latest Priority !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"13",
		                             "msg_title":"Load the Tasks from Firebase and change task list with order by Priority !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"14",
		                             "msg_title":"Enable the function to Scroll up and down one task at a time !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"15",
		                             "msg_title":"Enable the function to Page down like 5 task at a time !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"16",
		                             "msg_title":"Switch to different To-Do-List (Work, Private, Errands, Pastdue, Archived...) !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"17",
		                             "msg_title":"Design the Calendar-view of HTML page !!",
		                             "msg_details":"HTML/CSS effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"18",
		                             "msg_title":"Switch to Calendar-view of the same To-Do-List !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"19",
		                             "msg_title":"Enable the Search feature for tasks inside a To-Do-List in LIST view!!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"20",
		                             "msg_title":"Enable the Highlight feature for tasks inside a To-Do-List in CALENDAR view !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"21",
		                             "msg_title":"Default Filter feature is to show OPEN tasks only after click the REFRESH icon !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },

		                           {
		                             "uuid":"22",
		                             "msg_title":"Add the FILTER feature with a pop-screen to input filter criteria !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           }





		                         ]
		                       },
		                       
 		                     {
			                  "Name": "Archived",
                              "created_date":"2016-09-04",
		                      "Msg": [
		                           {
		                             "uuid":"1",
		                             "msg_title":"Testing 123 !!",
		                             "msg_details":"testing testing testing  !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"1",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"2",
		                             "msg_title":"Test 456 !!",
		                             "msg_details":"testing testing testing  !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"2",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"3",
		                             "msg_title":"Test 789 !!",
		                             "msg_details":"testing testing testing  !!",
		                             "msg_task_type":"Incident",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "like_count":"0",
		                             "priority":"0",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           }
		                         ]
		                       }

                  ]
                };
