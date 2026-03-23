// Understanding path module and JSON module

const path=require("path");
//JSON in loaded as a normal
const appConfig=require("./support/app-config.json");

console.log("__dirname",__dirname);
console.log("__filename",__filename);

console.log("Application name: ",appConfig.appName)
console.log("Application name: ",appConfig.environment)
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log("Application name: ",appConfig.features.join(", "))