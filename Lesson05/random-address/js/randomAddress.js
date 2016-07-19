// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');

st_no = [211,113,580,617,990,100,203,300,450,707];
st_name = ["Main Street","Broadway Street","Wall Street","Market Street","Church Street"];
city_nm = ["Concord","Albany","Bethlehem","Hope","Sydney"];
state_nm = ["MA","IL","NY","AK","CA","NC", "NJ"];
postal_code =["94140", "24019", "10117", "52030", "71920"];

var st_no__counter= -1;
var st_name__counter= -1;
var city_nm__counter= -1;
var state_nm__counter= -1;
var postal_code__counter= -1;

var address="";
// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)

function random_num (min, max) {
	var num = (Math.random() * (max - min)) + min;
	return Math.round(num);
}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}

// Event Listeners
// ------------------------------------------
function generateAddress(e) {

   st_no__counter= random_num (1, st_no.length);
   st_name__counter= random_num (1, st_name.length);
   city_nm__counter= random_num (1, city_nm.length);
   state_nm__counter= random_num (1, state_nm.length);
   postal_code__counter= random_num (1, postal_code.length);

   
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address

   address = st_no[st_no__counter] 
               + ' ' + st_name[st_name__counter] + ','
               + ' ' + city_nm[city_nm__counter] + ','
               + ' ' + state_nm[state_nm__counter]
               + ' ' + postal_code[postal_code__counter];
   addAddress(address);
}






