//-------------------------------------------------------------------
//----------- For Pyth Theory ---------------------------------------
//-------------------------------------------------------------------
var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');
pyA.addEventListener('keyup', calcPy);
pyB.addEventListener('keyup', calcPy);

function calcPy(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
         pyC.value = calcLongestSide(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}

//-------------------------------------------------------------------
//----------- For Radius/Circumfence conv.  -------------------------
//-------------------------------------------------------------------
var r = document.querySelector('.circum-r');
var c = document.querySelector('.circum-c');
r.addEventListener('keyup', calcCtoR);
c.addEventListener('keyup', calcRtoC);

function calcCtoR(event) {
  if (r.value.length > 0) {
    c.value = calc_R2C(r.value)
  } else {
    c.value = '';
  }
}

function calcRtoC(event) {
  if (c.value.length > 0) {
    r.value = calc_C2R(c.value)
  } else {
    r.value = '';
  }
}

//-------------------------------------------------------------------
//----------- For F/C conversion  -----------------------------------
//-------------------------------------------------------------------
var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');
tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calc_F2C(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calc_C2F(tempC.value)
  } else {
    tempF.value = '';
  }
}
