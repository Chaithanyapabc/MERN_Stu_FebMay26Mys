//break statement
for(i=0;i<5;i++){
    if(i===2){
        console.log("i",i);
    break; //breaks the loop when i=2
    }
}

//continue statement
for(i=0;i<5;i++){
    if(i===2){
        //console.log("i",i);
        continue; //skips the rest of the loop when i=2
    }
    console.log("i",i);
}
