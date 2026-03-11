const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeInput.value);
    sessionStorage.setItem("userName","Chaithanya");
    sessionStorage.setItem("loggedIn","true");
    console.log("Save theme: ",themeInput.value);
    output.textContent = "Stored to sessionStorage successfully";
    output.style.color = "green";
});

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = sessionSetorage.getItem("theme");
    output.textContent = "theme is: "+theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    sessionSetorage.removeItem("loggedIn");
    output.textContent = "Removed 'loggedIn' ";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    sessionSetorage.clear();
    output.textContent = "Clear Storage from SessionSetorage";
    output.style.color = "green";
});