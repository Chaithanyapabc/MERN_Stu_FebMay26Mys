//Handling errors with try/catch
function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;

        if(isServiceAvailable){
            resolve("Success! customer profile loaded.");
        }
        else{
            reject("Unsuccessful! customer profile loaded.");
        }
    });
}
async function showCustomerProfile(){
    try{
        const message = await loadCustomerProfile();
        console.log(message);
    }
    catch(error){
        console.log("Error:",error);
    }
}
showCustomerProfile();