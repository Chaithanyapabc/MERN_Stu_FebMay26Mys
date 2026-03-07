const startBtn = document.getElementById("startBtn");
const removeBtn = document.getElementById("removeBtn");

function handleClick() {
    console.log("StartBtn Clicked");
}
startBtn.addEventListener("click", handleClick);
removeBtn.addEventListener("click", function() {
    startBtn.removeEventListener("click", handleClick);
    console.log("click listner removed from startBtn");
});
