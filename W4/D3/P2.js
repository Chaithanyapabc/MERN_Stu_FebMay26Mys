const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("userName","Chaithanya");
    localStorage.setItem("loggedIn","true");
    console.log("Save theme: ",themeInput.value);
    output.textContent = "Stored to localStorage successfully";
    output.style.color = "green";
});

// document.getElementById("readBtn").addEventListener("click",function(){
//     console.log(localStorage.getItem("theme"));
//     output.textContent = "save localStorage successfully";
//     output.style.color = "red";
// });

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.textContent = "theme is: "+theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    localStorage.removeItem("loggedIn");
    output.textContent = "Removed 'loggedIn' ";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    output.textContent = "Clear Storage from LocalStorage";
    output.style.color = "green";
});