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
    } else if (age >=16 && age < 18) {
         msg="You can drive !";
    } else if (age >=18 && age < 21) {
         msg="You can vote !";
    } else if (age >=21 && age < 25) {
         msg="You can drink alcohol !";
    } else if (age >=25 && age < 35) {
         msg="You can rent a car !";
    } else if (age >=35 && age < 62) {
         msg="You can run for president !";
    } else if (age >=62 && age < 99) {
         msg="You collect social security benefits !";
    } else if (age >=100 ) {
         msg="You are too old for anything !";
    } else  
         msg="Wrong input, please try again !!";
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
