var user = prompt("What's your favorite thing?");

myFunction("abby", user); // put in two values to use the function, functions get hoistedvar food = "cheese";

function myFunction(argument1, argument2) { // uses the first and second value how you want in the function
  alert(`${argument1} is better than ${argument2}. Sorry pal`);
}
