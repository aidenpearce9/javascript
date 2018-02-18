// var user = {
//   name : 'Troy',
//   password : 'keyblade',
//   login : new Date()
// };
//
// console.log('Name: ', user.name); // dot notation
// console.log('Password: ', user['password']); // bracket notation

var newUserForm = document.forms.newUser;
newUserForm.addEventListener("submit", function(e) {
  login(e);
});
function User(a, b) {
  this.username = a;
  this.password = b;
}
function login(e) {
  e.preventDefault();
  var username = document.querySelector('#name').value;
  var password = document.querySelector('#password').value;
  var newUser = new User(username, password);
  console.log(newUser);
}
