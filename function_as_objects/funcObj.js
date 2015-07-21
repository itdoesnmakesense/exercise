/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */
 function multiply(a,b) {
	return a * b;
} 

/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */
function divide(a, b) {
	return a / b;
}

/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */
function doMath(val1,val2,math) {
	return math(val1,val2);
}


var finalResult = doMath(20,5,divide);
document.write(finalResult);
/*
  Log the result
 */

console.log(finalResult);