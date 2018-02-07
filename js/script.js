// var headOfPage = document.getElementsByClassName('header'); // grabs everything with the listed class name
// // console.log(headOfPage);
//
// var divOfPage = document.getElementsByTagName('div'); // grabs everything with the listed tag
// // console.log(divOfPage);
//
// var paragraphOfPage = document.getElementById('paragraph'); // grabs element with the listed id name
// // console.log(paragraphOfPage);
//
// var divOnPage = document.querySelector('div'); // grabs element with the listed .class/ #id/ element name
// // console.log(divOnPage);
//
// var everydivOnPage = document.querySelectorAll('div'); // grabs every element with the listed .class/ #id/ element name
// // console.log(everydivOnPage);
//
// /*Quick query funtion*/
//
// var userQueryType = prompt("Which type of query would you like to use?", "Please use 'tag', 'class', 'id', 'selector', 'selectorAll'");
//
// function queryDom(queryType, tagToQuery) {
//   var tagToQuery = 'body';
//   switch(queryType) {
//     case 'tag':
//       console.log(document.getElementsByTagName('body')[0]);
//       break;
//     case 'class':
//       console.log(document.getElementsByClassName('header')[0]);
//       break;
//     case 'id':
//       console.log(document.getElementById('paragraph'));
//       break;
//     case 'selector':
//       console.log(document.querySelector('#otherP'));
//       break;
//     default:
//       alert('that is not an option');
//       var newUserQueryType = prompt("Which type of query would you like to use?", "Please use 'tag', 'class', 'id', 'selector', 'selectorAll'");
//       queryDom(newUserQueryType, tagToQuery);
//   }
// }
//
// queryDom(userQueryType);

/*event listeners*/

var myKey = document.querySelector('.keydownExample');
myKey.addEventListener('keydown', function(e) {
  console.log(e);
});
