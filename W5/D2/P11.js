//Chaining promises with returned promises
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product: "Laptop",
                quantity:2
            });
        },700);
    });
}
getOrderId()
.then(function(orderId){
    console.log("Ordered Id recieved: ",orderId);
    return getOrderDetails(orderId);
})
.then(function(OrderDetails){
    console.log("Ordered details loaded.");
    console.log("Product:",OrderDetails.product);
    console.log("Quality:",OrderDetails.quantity);
})