//why use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve({id:101,name:"kiran"})
        },1000);
    });
}
function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"])
        },1200);
    });

}
async function showUserAndOrders(){
    const user= await getUser()
    const order = await getOrders(user.id);
    console.log("User loaded: ",order);
}
showUserAndOrders();