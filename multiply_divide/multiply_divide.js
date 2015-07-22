


function divide(num){
	return num / 10;
}
function multiply(num){
	return num * 5;
}

// function showOutput(text) {
// 	document.getElementById("output").innerHTML = "Cool! " + text + " divided by 10 is: " + divide(text);
// }

var userInput = function () {
	var text = document.getElementById("inputText").value;
	//console.log(text);
	if (text.length === 0) {
		alert("Hey! You haven't entered a number!");
	} else if (text.length > 5) {
		alert("Cool! " + text + " divided by 10 is: " + divide(text));
		//showOutput(divide(text));
	} else if (text.length < 5) {
		alert("Cool! " + text + " multiplied by 5 is: " + multiply(text));
		
	}
}



var button = document.getElementById("imAButton");
button.onclick = userInput;