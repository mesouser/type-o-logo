//variables to hold info about the logo
var logo = getElementByName('logo');
var letters = logo.length;
var estimate = letters * 11.5;

//get the element that has the id of 'estimate' and replace
var elEstimate = document.getElementById('estimate');
elEstimate.textContent = '$' + estimate;
//<======= ABOVE DOESN'T WORK! STUDY AND CIRCLE BACK TO FIX!
