// var num1 = prompt("Please give a number", 10);
// var num2 = prompt("Please give another number", 10);
// parseInt();
// var result = num1 + num2;
// alert(result);

// var age = prompt("What is your age?", "5");
// if (age >= 18) {
//   var young = confirm("are you below 80?");
//   switch (young) {
//     case true:
//       confirm("Do you like starwars?");
//       break;
//     case false:
//       confirm("Do you like prunes?");
//       break;
//   }
// } else {
//   alert("Sorry, you are not old enough.");
// }

var userAge = confirm("Are you over 18?");

if (userAge == true) {
  underEighty = confirm("Are you under 80?");
  if (underEighty) {
    var starWars = confirm("do you like starwars?");
  } else {
    confirm("Do you like prunes?");
  }
} else {
  alert("Sorry, not old enough");
}
