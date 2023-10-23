window.addEventListener("load", function() {
const flavors = [1, 2, 3, 4 , 5]
const ul = document.querySelector("ul");
flavors.forEach(function(flavor) {
const li = document.createElement("li");
li.append(flavor);
ul.append(li);
});
});