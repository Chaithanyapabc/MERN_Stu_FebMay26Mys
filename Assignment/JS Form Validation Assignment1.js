const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const faqList = document.getElementById("faqList");
const error = document.getElementById("error");
const emptyMsg = document.getElementById("emptyMsg");

addBtn.addEventListener("click", function () {
    let question = questionInput.value;
    let answer = answerInput.value;
    if (question.length < 5) {
        error.textContent = "Question must be at least 5 characters";
        return;
    }
    if (answer.length < 15) {
        error.textContent = "Answer must be at least 15 characters";
        return;
    }
    error.textContent = "";
    
    const faq = document.createElement("div");
    const q = document.createElement("h3");
    q.textContent = question;
    q.insertAdjacentHTML("beforeend", " <span>FAQ</span>");
    
    const a = document.createElement("p");
    a.textContent = answer;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        faq.remove();
    if (faqList.children.length === 0) {
        emptyMsg.style.display = "block";
    }
});

faq.appendChild(q);
faq.appendChild(a);
faq.appendChild(delBtn);
faqList.appendChild(faq);
emptyMsg.style.display = "none";
questionInput.value = "";
answerInput.value = "";

});