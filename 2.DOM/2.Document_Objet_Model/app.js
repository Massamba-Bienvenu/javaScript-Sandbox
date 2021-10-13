const li = document.createElement("li");

//Add class:
li.className = "collection-item";

//Add id:
li.id = "new-item";

//Add attribute
li.setAttribute("title", "New item");

//Create  text mnode and append
li.appendChild(document.createTextNode("Hello World"));

//create new link element
const link = document.createElement("a");
//add class
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = "<i class='fa fa-remove'></li>";

//append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector("ul.collection").appendChild(li)


console.log(li);