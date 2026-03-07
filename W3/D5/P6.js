// Get the form and message elements
const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    //stop page reloaded
    event.preventDefault();
    if(username.value === "") {
        message.textContent = "Username is required!";
        console.log("Room blocked: no input for username");
        return;
    }
    message.textContent = "Form handeled by JS for user", username.value;
    console.log("Form submitted with username: ", username.value);
});