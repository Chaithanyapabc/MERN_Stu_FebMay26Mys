const box = document.getElementById("box");
const insideBtn = document.getElementById("insideBtn");
box.addEventListener("click", function(event) {
    console.log("Event type",event.type);
    console.log("event target id",event.target.id);
    console.log("event current target id",event.currentTarget.id);
});
//inside button
insideBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Event type",event.type);
    console.log("event target id",event.target.id);
    console.log("event current target id",event.currentTarget.id);
});