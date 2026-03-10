
const container = document.getElementById("container");
//position:
//beforebegin
//afterbegin
//beforeend
//afterend
//insertAdjacentHTML() method of the the resulting nodes into the DOM tree at a specified position.
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("beforeend","<p>Dynamically inserted</p>");
});