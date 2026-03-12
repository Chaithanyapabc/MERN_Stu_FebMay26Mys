const form = document.getElementById("feedbackForm");
const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");

let total = 0;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const feedback = document.getElementById("feedback").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || type === "" || feedback === "") {
        alert("All fields are required");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Enter valid email");
        return;
    }

    if (feedback.length < 20) {
        alert("Feedback must be at least 20 characters");
        return;
    }

    let label = "";

    if (type === "Bug") {
        label = "[Needs Review]";
    }
    else if (type === "Suggestion") {
        label = "[Idea]";
    }
    else if (type === "Appreciation") {
        label = "[Positive]";
    }

    const card = document.createElement("div");

    card.innerHTML = `
<h4>${label}</h4>
<p><b>Name:</b> <span class="n"></span></p>
<p><b>Email:</b> <span class="e"></span></p>
<p><b>Type:</b> <span class="t"></span></p>
<p><b>Feedback:</b> <span class="f"></span></p>
<button class="deleteBtn">Delete</button>
<hr>
`;

    card.querySelector(".n").textContent = name;
    card.querySelector(".e").textContent = email;
    card.querySelector(".t").textContent = type;
    card.querySelector(".f").textContent = feedback;

    card.querySelector(".deleteBtn").onclick = function () {
        card.remove();
        total--;
        countDisplay.textContent = total;
    };

    container.appendChild(card);

    total++;
    countDisplay.textContent = total;

    form.reset();

});