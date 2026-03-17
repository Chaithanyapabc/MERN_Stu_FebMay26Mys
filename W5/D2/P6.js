//Callback Nesting
console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step1: User loaded.");

    setTimeout(function(){
        console.log("Step2: Order loaded.");

        setTimeout(function(){
            console.log("Step3: Payments loaded.");

            setTimeout(function(){
                console.log("Step3: Shipment loaded.");
                console.log("We are in callback hell!!!")
            },1000);
        },800);
    },600);
},400);