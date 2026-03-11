const form = document.getElementById("feedbackForm");
const name = document.getElementById("fbname");
const email = document.getElementById("fbemail");
const type = document.getElementById("fbtype");
const feedback = document.getElementById("feedbacks");
const message = document.getElementById("message");
const cardContainer = document.getElementById("feedbackCard");
//
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const typeValue = type.value;
    const feedbackValue = feedback.value.trim();
    if(!nameValue){
        message.textContent = "Name is required";
        message.style.color = "red";
        name.focus();
        return;
    }
    if (!emailValue) {
        message.textContent = "Email is required";
        message.style.color = "red";
        email.focus();
        return;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        message.textContent = "Please enter valid email id";
        message.style.color = "red";
        email.focus();
        return;
    }

    if (feedbackValue.length < 20) {
        message.textContent = "Feedback must be atleast 20 characters";
        message.style.color = "red";
        feedback.focus();
        return;
    }

    message.textContent = "Feedback submitted successfully";
    message.style.color = "green";

    createCard(nameValue, emailValue, typeValue, feedbackValue);

    form.reset();
});

email.addEventListener("input", () => message.textContent = "");
feedback.addEventListener("input", () => message.textContent = "");

function createCard(name, email, type, feedback) {

    const card = document.createElement("div");

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.marginTop = "10px";

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    cardContainer.appendChild(card);
}