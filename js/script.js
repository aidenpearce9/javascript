var string = "hello"; // defined by quotes around it

var number = 5; // any number outside of quotes

var boolean = true; // a boolean can be true or false

var thisIsUndefined; // it is declared but not assigned a value

{
  // this is a block of code
}

var number; // declaration
number = 420; // definition
var number = 420; // declaration AND definition (preferred)

var firstNumber = 1;
console.log(firstNumber); // value plugs in as 1

console.log(secondNumber); // value hasn't been defined in the code yet
var secondNumber = 2;

var randomVariable1 = "example"; //gets hoisted, remains undefined until declared in code
let randomVariable2 = "example"; // doesn't get hoisted, remains non-existent until declared in code

{
  let blockData = 10;
}
// console.log(blockData);  comes back with error because it doesn't exist outside of the block like a var would

const numberOne = 1; // cannot be redeclared

let rightNow = new Date();
console.log(rightNow); // gives the current date including day, month, year, hour, minutes, seconds, miliseconds

var string = "hey there";
var newString = new String("hey there");

console.log(string); // primitive
console.log(newString); // shows up as an object.

var myArray = ["this is the first", 4, "this is the third"];
console.log(myArray.length); // will display how many things are in the array, in this case 3

var myObject = {
  myString: "Hello World", // key: value
  favoriteNumber: 9
};

let alertMessage = alert("sup dog"); // alerts as a popup, no value
let confirmMessage = confirm("Why are you here?"); // gives the option to confirm or cancel, value becomes a boolean
let promptMessage = prompt("What is your name?", "I don't have one."); // Will let you type a response, and the value becomes the typed response
