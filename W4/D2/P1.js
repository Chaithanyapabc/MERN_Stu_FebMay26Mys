//innerText & textContent
//innerText:visible render text only
//textContent:all text nodes regarless of CSS
//innerHtml:allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const textContentBtn = document.getElementById("textContentBtn");
const resetBtn = document.getElementById("resetBtn");

document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});

textContentBtn.addEventListener("click",function(){
    message.innerText = "Updated using TextContent";
});

resetBtn.addEventListener("click",function(){
    message.innerText = "Original Message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    message.innerHTML = "<strong>Original</strong> Content";
});