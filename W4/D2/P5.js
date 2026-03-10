const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");
//event is the object
signupForm.addEventListener("submit",function(event){
    event.preventDefault();
    const email = signupEmail.value.trim();

    if(!email){
        message.textContent = "Email is required";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        message.textContent = "Please enter valid email id";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }
    //Password validation
    const password = signupPassword.value;
    
    if(!password){
        message.textContent = "password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check length of password
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 charecters long";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check UPPERCASE charecters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have atleast 1 UPPERCASE charecter";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //lowercase charecter
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have atleast 1 lowercase charecter";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check number
    if(!/\d/.test(password)){
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check special charecter
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must have atleast 1 spical charecter @#$%&*!";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    message.textContent = "Valid email & password entered";
     message.style.color = "green";
     console.log("Success!",{email,password:"***Hidden***"});
});
//clear message on input
signupEmail.addEventListener("input",() => message.textContent = "");
signupPassword.addEventListener("input",() => message.textContent = "");