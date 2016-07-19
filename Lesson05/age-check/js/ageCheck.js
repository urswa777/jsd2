// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


function getPrivilege(age) {
	var msg=""

    if (age < 16 && age >=0) {
         msg="You cannot do much outside of going to school !";
         console.log(msg);
    } else if (age >=16 && age < 18) {
         msg="You can drive !";
         console.log(msg);
    } else if (age >=18 && age < 21) {
         msg="You can vote !";
         console.log(msg);
    } else if (age >=21 && age < 25) {
         msg="You can drink alcohol !";
         console.log(msg);
    } else if (age >=25 && age < 35) {
         msg="You can rent a car !";
         console.log(msg);
    } else if (age >=35 && age < 62) {
         msg="You can run for president !";
         console.log(msg);
    } else if (age >=62 && age < 99) {
         msg="You collect social security benefits !";
         console.log(msg);
    } else if (age >=100 && age < 109) {
         msg="You are too old for anything .... stay home & celebrate !";
         console.log(msg);
    } else if (age >=110) {
         msg="You should be dead by now !";
         console.log(msg);
    } else  {
         msg="Wrong input, please try again !!";
         console.log(msg);
     }    
   return msg;
}


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
