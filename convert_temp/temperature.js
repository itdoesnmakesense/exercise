/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/
// var celsius = (text - 32) / 1.8
// var fahrenheit = (text * 1.8) + 32

function toCelsius(num) {
  return (num - 32) / 1.8;
}


function toFahrenheit(num) {
  return num * 1.8 + 32; 
}



var determineConverter = function(e) {
  var optionChosen = document.getElementsByName("conversion_type");
  var text = document.getElementById("textInput").value;

  for (var i = 0; i < optionChosen.length; i++){
    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
      alert(toCelsius(text));
      break;
   } else {
       alert(toFahrenheit(text));
       break;
    }
}
}
var button = document.getElementById("converter");
button.onclick = determineConverter;




// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (e) {

//   // This will actually return an array containing both of the radio buttons
//   // so you will need to look at each item in the array and see if the 'checked'
//   // property is true (sample code provided)
//   var optionChosen = document.getElementsByName("conversion_type");

//   // for loop
//     if (optionChosen.checked && optionChosen.value === 'celsius') {
//         toCelsius();
//     } else {
//       toFahrenheit();
//     }
//   // end for loop
// }

// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// // Assign a function to be executed when the button is clicked
// button.onclick = determineConverter();
// console.log(optionChosen);













