//commonJS export and import

function calculateTax(amount){  //amount is the input
    return amount*0.18;          //0.18 is tax 18%
}

function applyDiscount(amount,percent){
    return amount-amount*(percent/100);
}

function formatCurrency(amount){
    return "INR "+amount.toFixed(2);
}
//Module.exports makes this function available to require()
module.exports = {calculateTax,applyDiscount,formatCurrency};