//Function Scopes
function scope(){
    var insiderVar = 10;
    let insiderLet = 20;
    const insiderConst = 30;
    console.log(insiderVar); // 10
    console.log(insiderLet); // 20
    console.log(insiderConst); // 30
}
scope();
//console.log(insiderVar); // 10
//console.log(insiderLet); // 20
//console.log(insiderConst); // 30

function varFunctionScope(){
    if(true){
        var x = 40;
        let y = 50;
    }
    console.log("x: ", x); // 40
    //console.log("d: ", y); // ReferenceError: y is not defined
    console.log("y: ", y);

}
varFunctionScope();