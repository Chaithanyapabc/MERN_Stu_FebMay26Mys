const input=document.getElementById("nameInput");
const display=document.getElementById("display");

input.addEventListener("keydown", function(event) {
    console.log("Key pressed: ", event.key);
    display.textContent = "Last Key Pressed: " + event.key;
});