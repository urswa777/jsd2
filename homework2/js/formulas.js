
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  
//       Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////


function calcLongestSide(pyA,pyB) {
	pyC = Math.sqrt( pyA*pyA  + pyB*pyB  );
    return pyC;
}

//-----------------------------------------------------------
function calcCircumference(r) {
    c = 2 * Math.PI * r;
    return c;
}

function calcRadius(c) {
    r = (c / 2.0) / Math.PI;
    return r;
}

//-----------------------------------------------------------
function calcFahrenheitToCelcius (F) {
  C = (F - 32) * 5/9;
  return C;
}

function calcCelciusToFarenheit(C) {
  F = C * (9/5) + 32;
  return F;
 }