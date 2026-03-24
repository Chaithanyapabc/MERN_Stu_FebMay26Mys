//Removing EventEmitter listeners

const EventEmitter=require("events");

const jobEmitter= new EventEmitter();

function showjobProgress(status){
    console.log("job status: ",status);
}

//add listener
jobEmitter.on("progress",showjobProgress);

//Emit the event
jobEmitter.emit("progress","50% completed");

//remove listener
jobEmitter.off("progress",showjobProgress);

//Emit the event
jobEmitter.emit("progress","100% completed");