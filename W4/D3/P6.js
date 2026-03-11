const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "Sending Request...";
    fetch("https://jsonplaceholder.typicode.com/posts/12")
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        console.log("Text Response : ",text);
        // output.textContent = "Status: "+response.status+ "\nOk:"+response.ok;
        output.textContent = text;
    })
    .catch(function(error){
        output.textContent = "Unexpected fetch error: "+error.message;
    });
})