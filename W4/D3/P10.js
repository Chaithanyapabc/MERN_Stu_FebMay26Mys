const asyncFetch = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click",async function(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("HTTP error:"+response.status);
        const users = await response.json();
        console.log(users);
        //give id number as 1 to 3 it provide range of value in the data(slicing the data)
        const firstThree = users.slice(0,3);
        //Print inside the brouser
        output.textContent = JSON.stringify(firstThree,null,2);
        //const 
    }
    catch(error){
        output.textContent="Error:"+error.message;
    }
});
