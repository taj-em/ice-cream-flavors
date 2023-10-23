const flavors = [1, 2, 3, 4 , 5]
//const li = document.createElement("li");
const ul = document.querySelector("ul#difFlavors");
flavors.forEach(function(flavor) {
console.log(flavor);
const li = document.createElement("li"); 
li.append(flavor);
ul.append(li);
console.log(ul);
});

window.addEventListener("load", function () {
});


const flavors = [1, 2, 3, 4 , 5]
const li = document.createElement("li");
flavors.forEach(function(flavor) {
console.log(flavor);
const li = document.createElement("li"); 
li.append(flavor);
console.log(li);
});