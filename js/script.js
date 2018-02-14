// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Fizzbuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// const orderForm = document.forms.order;
//
// var submitBtn = orderForm.submit;
//
// document.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if (orderForm.quantity.value == null) {
//     //refill the form
//   }
// });

//  var checkScope = function() {
//    alert(`Hello, ${this.name}`);
//  }
//
// var name = "Troy";
//
// // function wrapLog() {
// //   logThis();
// // }
// //
// // wrapLog();
//
// var user = {
//   a: checkScope,
//   name: "Troy",
//   password: "keyblade9",
//   lastLogin: new Date()
// }
//
// user.a();

var myString = new String("Hello world");

console.log(Object.getPrototypeOf(myString));
