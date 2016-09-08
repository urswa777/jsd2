//------------------------------------------------------
//----- Core data : To-do-list object ------------------
//------------------------------------------------------

var defaultJSON = {  
	       "Type":"To-Do-List",
           "User":[
               {
                "LoginID":"toastmaster.ryan@gmail.com",
                "password":"AIzaSyDiu-guTL-2JBvIetP3Qa6sBiqfy9m-OBY",                  
	            "Last_touched_date":"2016-09-04",
                "List":
    	                 [
 		                  {
			                  "Name": "Personal",
                              "created_date":"2016-09-04",
		                      "Msg": [
		                           {
		                             "uuid":"4",
		                             "msg_title":"Build the visual first (html/css) for to-do-list view!!",
		                             "msg_details":"Think about all features, layout & UI flow so HTML/CSS work !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"4",
		                             "msg_importance":"5",
		                             "msg_urgency":"5",
		                             "msg_status":"Closed",
		                             "msg_levelOfEffort":"3",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"15",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-03 03:00pm",
		                             "completed_ts":"2016-09-03 11:56pm",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 2 hours", 
		                                 "update_datetime":"2016-09-03 04:40pm"},
		                                {"update_msg":"turns out more difficult than first though, need 2 more hours", 
		                                 "update_datetime":"2016-09-03 09:29pm"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"5",
		                             "msg_title":"Build the static-form for task/message input !!",
		                             "msg_details":"Think about all features, layout & UI flow so HTML/CSS work !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"4",
		                             "msg_importance":"4",
		                             "msg_urgency":"4",
		                             "msg_status":"Closed",
		                             "msg_levelOfEffort":"2",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"11",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-04 06:00am",
		                             "completed_ts":"2016-09-04 08:11am",
		                             "is_completed":"1",
		                             "Notes": [ 
		                                {"update_msg":"Easier than I thought, cut 2 hours", 
		                                 "update_datetime":"2016-09-04 07:40am"}
		                                 ]
		                           },
		                           {
		                             "uuid":"6",
		                             "msg_title":"Build Javascript structure to show static data in the to-do-list view !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-06",
		                             "msg_time_needed":"24",
		                             "msg_importance":"5",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"6",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"2016-09-04 12:00pm",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"get stuck with some glitch on some icons in the header", 
		                                 "update_datetime":"2016-09-05 05:25pm"},
		                                {"update_msg":"need more time... and patience !!", 
		                                 "update_datetime":"2016-09-05 11:29pm"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"7",
		                             "msg_title":"Make the input-form for messages(Task,reminder,...etc) to work & store in variable!!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-06",
		                             "msg_time_needed":"3",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"7",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"8",
		                             "msg_title":"Enable the Message form to work with Firebase!!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-07",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"9",
		                             "msg_title":"Retrieve the message from Firebase !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-07",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"2",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"10",
		                             "msg_title":"Edit the message from Firebase and Save it back !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-07",
		                             "msg_time_needed":"2",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"11",
		                             "msg_title":"Enable the Thumb Up and Down feature to change the Priority count !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-07",
		                             "msg_time_needed":"1",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"12",
		                             "msg_title":"Enable the REFRESH feature to change the display order by latest Priority !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-08",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"13",
		                             "msg_title":"Load the Tasks from Firebase and change task list with order by Priority !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-08",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"14",
		                             "msg_title":"Enable the function to Scroll up and down one task at a time !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-08",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"15",
		                             "msg_title":"Enable the function to Page down like 5 task at a time !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-09",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"16",
		                             "msg_title":"Switch to different To-Do-List (Work, Private, Errands, Pastdue, Archived...) !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-09",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"17",
		                             "msg_title":"Switch to display one of the three different To-Do-Lists  !!",
		                             "msg_details":"HTML/CSS effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-09",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"18",
		                             "msg_title":"Enable the filters : ALL, OPEN-only, Past-Due, Closed-only & Pending !!",
		                             "msg_details":"HTML/CSS effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },


		                           {
		                             "uuid":"19",
		                             "msg_title":"Design the Calendar-view of HTML page !!",
		                             "msg_details":"HTML/CSS effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"20",
		                             "msg_title":"Switch to Calendar-view of the same To-Do-List !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },
		                           {
		                             "uuid":"21",
		                             "msg_title":"Enable the Search feature for tasks inside a To-Do-List in LIST view!!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"22",
		                             "msg_title":"Enable the Highlight feature for tasks inside a To-Do-List in CALENDAR view !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"23",
		                             "msg_title":"Default Filter feature is to show OPEN tasks only after click the REFRESH icon !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-11",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           },

		                           {
		                             "uuid":"24",
		                             "msg_title":"Add the FILTER feature with a pop-screen to input filter criteria !!",
		                             "msg_details":"Javascript coding effort !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-11",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"5",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"3",
		                             "created_ts":"2016-09-03 09:07am",
		                             "started_ts":"",
		                             "completed_ts":"",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           }





		                         ]
		                       },
		                       
 		                     {
			                  "Name": "Social",
                              "created_date":"2016-09-04",
		                      "Msg": [
		                           {
		                             "uuid":"1",
		                             "msg_title":"Robert birthday",
		                             "msg_details":"blah blah blah  !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-11",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"4",
		                             "msg_urgency":"2",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"1",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"10",
		                             "created_ts":"2016-09-05 11:07am",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"buy a gift by 5 hours", 
		                                 "update_datetime":"2016-09-06 07:15am"}
		                                 ]
		                           },
		                           {
		                             "uuid":"2",
		                             "msg_title":"Catch up with Greg",
		                             "msg_details":"week night  !!",
		                             "msg_task_type":"Project",
		                             "msg_due_date":"2016-09-15",
		                             "msg_time_needed":"0.25",
		                             "msg_importance":"1",
		                             "msg_urgency":"1",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"5",
		                             "created_ts":"2016-09-05 10:17pm",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"may need to reschedule like one week later", 
		                                 "update_datetime":"2016-09-06 10:48am"}
		                                 ]
		                           },
		                           {
		                             "uuid":"3",
		                             "msg_title":"Volunteer for HRC !!",
		                             "msg_details":"phone bank data entry  !!",
		                             "msg_task_type":"commitment",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"4",
		                             "msg_importance":"4",
		                             "msg_urgency":"2",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"5",
		                             "msg_freqency":"weekly",
		                             "is_recurring":"1",
		                             "Love_task":"0",
		                             "priority":"2",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"recurring as usual", 
		                                 "update_datetime":"2016-09-06 01:33pm"}
		                                 ]
		                           }
		                       ]
		               },

 		                     {
			                  "Name": "Secret",
                              "created_date":"2016-09-04",
		                      "Msg": [
		                           {
		                             "uuid":"9001",
		                             "msg_title":"Project X",
		                             "msg_details":"blah blah blah  !!",
		                             "msg_task_type":"Routine",
		                             "msg_due_date":"2016-09-04",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"4",
		                             "msg_urgency":"2",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"2",
		                             "msg_freqency":"monthly",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"7",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"Something comes up, will delay by 5 hours", 
		                                 "update_datetime":"2016-09-04 09:40am"},
		                                {"update_msg":"turns out more diificult than first though, need 5 more manhours", 
		                                 "update_datetime":"2016-09-04 11:29am"}		                                      
		                                 ]
		                           },
		                           {
		                             "uuid":"9002",
		                             "msg_title":"Plan B",
		                             "msg_details":"weekend !!",
		                             "msg_task_type":"Routine",
		                             "msg_due_date":"2016-09-10",
		                             "msg_time_needed":"0.5",
		                             "msg_importance":"3",
		                             "msg_urgency":"1",
		                             "msg_status":"Open",
		                             "msg_levelOfEffort":"3",
		                             "msg_freqency":"quarterly",
		                             "is_recurring":"0",
		                             "Love_task":"0",
		                             "priority":"2",
		                             "created_ts":"2016-09-03 09:07am",
		                             "is_completed":"0",
		                             "Notes": [ 
		                                {"update_msg":"none", 
		                                 "update_datetime":""}
		                                 ]
		                           }
		                       ]
		               }



                      ]
                }
               ]
        }   
