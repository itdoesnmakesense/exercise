/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.

  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
 function Make() {
 this.makeName = "Jeep";
}
/*
Create a function, Model, to hold the 
corresponding property and value
*/
 function Model(){
  this.modelName = "Wrangler"
}
// What is the prototype of a Model?
Model.prototype = new Make();  
// Define a Car
function Car (value){
  this.color = value;
}
// What is the prototype of a Car?

Car.prototype = new Model(); 
console.log(Car);

// Create the first car

var firstCar = new Car("red");
console.log(firstCar)

// Create the second car
var secondCar = new Car("black");
console.log(secondCar)

// Create the third car
var thirdCar = new Car("blue");
console.log(thirdCar)














