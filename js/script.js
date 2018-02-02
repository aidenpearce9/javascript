var array = []; // anything inside [] is an array

var myArray = ["hey", 10, true, [], {}]; // all primitives can fit in an array, even another array
console.log(myArray[1]); // will display 10, because arrays start at 0

var newArray = ["inception", 9, true, 2015];
console.log(newArray, newArray.length);

console.log(typeof(newArray));
console.log(Array.isArray(newArray)); // checks if the object is an array and returns true or false


var name = prompt("what's your name?");
var age = prompt("Whats your age?");
newArray.push(age); // puts the value at the end of an array
newArray.unshift(name); // puts the value at the front of the array
console.log(newArray);

var removedItem = newArray.pop(); // removes the last item of the array
console.log(removedItem);
console.log(newArray);
newArray.shift(); // removes the first item of the array
console.log(newArray);
newArray.splice(1/*index to start at*/, 0/*how many to remove*/, "new item" /*what replaces it/them*/); // splice removes items starting with the number given
console.log(newArray);

console.log(newArray.slice(0, 1));
