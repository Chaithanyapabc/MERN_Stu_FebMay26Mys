//NodeJS Modules 
const moduleTitle = "NodeJS module basics";
function describeModule(){
    console.log("This file is its own module");
    console.log("Title:",moduleTitle);
    console.log("Local value stay inside this file unless exported");
}
describeModule();//invoking the function