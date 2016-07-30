//-------------------------------------------------------------------
//----------- Document (Elements) -----------------------------------
//-------------------------------------------------------------------
var score=0;

            var btn_add5  = document.querySelector("#add-5");
            var btn_cut5  = document.querySelector("#cut-5");
            var txt_score = document.querySelector("#score_display");
            var btn_setscore = document.querySelector("#submit-custom-score");
            var box_CustomScore = document.querySelector("#custom-score");

      //============================================================
      //======= Initialization   ===================================
      //============================================================
               DisplayScore(score);

      //============================================================
      //============== Capture elements' value   ===================
      //============================================================
            


//-------------------------------------------------------------------
//----------- Events  -----------------------------------------------
//-------------------------------------------------------------------
            btn_add5.addEventListener('click', Add5);
            btn_cut5.addEventListener('click', Cut5);
            btn_setscore.addEventListener('click', SetScore);


//-------------------------------------------------------------------
//----------- Functions  ---------------------------------------------
//-------------------------------------------------------------------

            function DisplayScore() {
               txt_score.innerHTML = score + " Point"; 
            }            
            function Add5(e) {
               e.preventDefault();
               console.log('Button ADD5 is clicked !!');
               score = score + 5;
               DisplayScore();
            }
           function Cut5(e) {
               e.preventDefault();
               console.log('Button CUT5 is clicked !!');
               score = score - 5;
               DisplayScore();
            }
           function SetScore(e) {
               e.preventDefault();
               var x= box_CustomScore.value;
               var s= parseInt(x);
               if (isNaN(x)) {
                   alert("Please input a number !! Moron ");
               } else { 
                   console.log('Button SET-SCORE is clicked !!  set score is ' + s + ' or ' + x);
                   score = s;
                   DisplayScore();
                }   
            }






