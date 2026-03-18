//try catch finally with async/await
function processPayment(isSucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceeded){
                resolve("Payment processed successfully.");
            }
            else{
                reject("Payment couldn't passed successfully.")
            }
        },700);
    });
}
async function runPaymentFlow(isSucceeded){
    try{
        const result = await processPayment(isSucceeded);
        console.log("Success:",result);
    }
    catch(error){
        console.log("Failed:",error);
    }
    finally{
        console.log("Payment flow compleated.");
    }
}
runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});