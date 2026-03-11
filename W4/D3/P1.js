const checkBtn = document.getElementById("checkBtn");
//
checkBtn.addEventListener("click",function(){
    console.log("Local Storage Check",typeof localStorage !== "undefined");
    console.log("Session Storage Check",typeof sessionStorage !== "undefined");
    console.log("localStorage object",localStorage);
    console.log("sessionStorge object",sessionStorage);
});