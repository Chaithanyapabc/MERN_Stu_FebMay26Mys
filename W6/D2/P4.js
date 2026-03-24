//Using the EventEmitter class
const EventEmitter = require("events");//npm install lodash

//create a new event emitter instance
//This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaced" event.
//Whenever the event is emitted, the function will execute
//once() resister a listener that automatically removes itself after running for the first time

orderEmitter.once("OrderPlaced",
    function(orderId,name,orderValue){
        console.log("Bill amount: ",orderValue);
        console.log("Waiting for restaurent to accept order. ",orderId);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Restaurent accept order. ",orderId);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Assigning delivery partner.");
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Ramesh is delivering your order. ",orderId);
    }
);

//Emit the event with extra data
//The listener recieves the orderId Values.
orderEmitter.emit("OrderPlaced","ORD-2403001","Chaithanya",10000);
orderEmitter.emit("OrderPlaced","ORD-2403001","Chaithanya",10000);