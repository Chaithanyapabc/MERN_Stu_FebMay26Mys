//JS handles asynchronous tasks in NodeJS

function fetchReport(callback){
    console.log("Fetching report data...");

    setTimeout(()=>{
        const report = "Monthly report is ready";
        callback(report);
    },1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});
//first print the synchronous task then it print the asynchronous task
console.log("Application continues to execute further");