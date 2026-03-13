const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const confPassword = document.getElementById("confPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const password = signupPassword.value;
    const confirm = confPassword.value;

    // Password required
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "blue";
        signupPassword.focus();
        return;
    }

    // Password length
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color = "blue";
        signupPassword.focus();
        return;
    }

    // Confirm password check
    if(password !== confirm){
        message.textContent = "Passwords do not match.";
        message.style.color = "blue";
        confPassword.focus();
        return;
    }

    // Success 
    message.textContent = "Password matched successfully!";
    message.style.color = "red";
});

// clear message on input
signupPassword.addEventListener("input", () => message.textContent = "");
confPassword.addEventListener("input", () => message.textContent = "");