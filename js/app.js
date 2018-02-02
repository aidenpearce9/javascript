//
// var userInput = prompt("How old is your dog in human years?", 10); // declare the variable to exist in the scope
// var tryAgain;
// function dogYears(userNum) {
//   parseInt(userNum);
//   if (isNaN(userNum)) {
//     alert("Please put a number");
//     dogYears(prompt("How old is your dog in human years?", 10));
//   } else {
//     var newNum = userNum * 7;
//     alert(`Your dog is ${newNum} years old in dog years`);
//     tryAgain = confirm("Want to try again?");
//     if (tryAgain == true) {
//       dogYears(prompt("How old is your dog in human years?", 10));
//     } else {
//       alert("Have a nice day!");
//     }
//   }
// }
//
// dogYears(userInput);

var userProduct = prompt("What product are you calculating?", "cigarettes");
var userPerDay = prompt("How many times per day do you use per day?", "2");
var userAge = prompt("How old are you?", "25");
function howMuch(product, perDay, age) {
  parseInt(perDay);
  parseInt(age);
  if (isNaN(perDay) || isNaN(age)) {
    if (isNaN(perDay)) {
      var newPerDay = prompt("Please put how often you use it in number form!");
      howMuch(userProduct, newPerDay, userAge);
    }
    if (isNaN(age)) {
      var newAge = prompt("Please put your age in number form!");
      howMuch(userProduct, userPerDay, newAge);
    }
  } else {
    alert("you did it!");
  }
}

howMuch(userProduct, userPerDay, userAge);
