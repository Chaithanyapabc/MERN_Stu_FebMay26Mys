//getElementById
//console.log("Document Object:",document);
//console.log("Page title",document.title);

//const heading = document.getElementById("mainHeading");
//console.log("Heading text",heading.textContent);

//getElementByClassName

const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

//getElementByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++){
        console.log(info[i].textContent);
        info[i].style.color="blue";
    }
    for(let i=0;i<spanTag.length;i++){
        console.log(spanTag[i].textContent);
        spanTag[i].style.color="lightgreen";
    }
    //Quary Selector:returns first element matching css selector
    const mainFirstHeading = document.querySelector(".mainHeading");
    mainFirstHeading.style.color="red";
});

//Quary selector all:returns all elements matching the selector
const task = document.querySelectorAll(".task");
//task.style.color="purple"
task.forEach(function(task){
    task.style.color="purple";
})