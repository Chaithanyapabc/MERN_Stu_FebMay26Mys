//await with non-promise value

function getReadyValue(){
    return 25;
}
function getDelayedValue(){
    return Promise.resolve(75);
}
async function showValues(){
    const readyValue = await getReadyValue();
    const delayValue = await getDelayedValue();

    console.log("Ready Value:",readyValue);
    console.log("Delay Value:",delayValue);
}
showValues();