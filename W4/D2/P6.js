const livePassword = document.getElementById("livePassword");
const message = document.getElementById("message");

livePassword.addEventListener("input",function(){
    //Password validation
    const password = livePasswordPassword.value;
    if(!password){
        message.textContent = "password is required";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check length of password
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 charecters long";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check UPPERCASE charecters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have atleast 1 UPPERCASE charecter";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //lowercase charecter
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have atleast 1 lowercase charecter";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check number
    if(!/\d/.test(password)){
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    //check special charecter
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must have atleast 1 spical charecter @#$%&*!";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    message.textContent = "Valid email & password entered";
     message.style.color = "green";
     console.log("Success!",{email,password});
});
//clear message on input
signupEmail.addEventListener("input",() => message.textContent = "");
livePassword.addEventListener("input",() => message.textContent = "");