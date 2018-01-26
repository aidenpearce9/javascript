const bestNumber = 9;

var myString = "Hey I'm a string";
var newString = new String("Hey I'm a string");
console.log(myString === newString);
console.log(typeof(myString));
console.log(typeof(newString));

var number1 = 10;
var number2 = 10;
number1++; // ++ increments by 1
number1--; // -- subtracts by 1
console.log(number1); // gives back 11
console.log(number2); // gives back 9

if (number1 === 10) { // sets the condition
  alert("it's ten!"); // runs if it is truthy
} else {
  alert("It's not ten!"); // runs if it is falsey
}

var number1 = prompt("give a number between 1-20");
switch (true) {
  case (number1 < 10):
    alert("It's less than ten!");
    break;
  case (number1 == 10):
    alert("It's ten!");
    break;
  case (number1 > 20):
    alert("That's too high!");
    break;
  case (number1 > 10):
    alert("It's more than ten!");
    break;
  default:
    alert("Try again!");
    break;
}
