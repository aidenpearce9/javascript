var body = document.querySelector("body");
var h1 = document.createElement("h1"); // createElement makes a tag out of thin air
var p = document.createElement("p");
h1.textContent = "hello world"; // textContent changes the words written
p.textContent = "nice to meet you";
body.appendChild(p); // appendChild adds it inside the parent
body.insertBefore(h1, p); // insertBefore appends it before the second argument
//h1.className = "red-background, white-text"; // className adds/replaces a class to the specified tag
body.classList.add("red-background"); // classList.add adds a class to any existing classes
body.classList.remove("white-text"); // classList.remove removes a class from any existing classes
// .toggle checks if the class exists, does the opposite
// .contains turns it into a boolean value

var newImg = document.createElement("img");
newImg.setAttribute("src", "http://i0.kym-cdn.com/photos/images/newsfeed/001/273/149/3c9.png"); 
body.appendChild(newImg);
