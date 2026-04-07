// writing & reading bookings and its logs

const { resolve } = require("dns");
const fs = require("fs");
const { reject } = require("lodash");
const path = require("path");
const { buffer } = require("stream/consumers");

const dataDir = path.join(__dirname, "data");
const logsDir = path.join(dataDir, "logs");
const bookingsFile = path.join(dataDir, "bookings.json");
const logFile = path.join(logsDir, "booking_logs");
const archivedLogsFile = path.join(logsDir, "booking_archived_log");

function ensureDirectories(){
    if(!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir);
    }
    if(!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }
}

function listDataFiles(){
    ensureDirectories();
    return fs.readdirSync(dataDir);
}

function removeLogDirectorySync(){
    if(fs.existsSync(logsDir)){
        fs.rmdirSync(logsDir,{recursive:true}); 
    }
}

//Read/write bookings
function initializeBookingsFileSync(){
    ensureDirectories();

    if(!fs.existsSync(bookingsFile)){
        fs.writeFileSync(bookingsFile,JSON.stringify([],null,2),"utf-8");
    }
}

function readBookingsSync(){
    initializeBookingsFileSync();

    //Read Synchroniously using buffer first, then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}

function readBookingsAsync(){
    initializeBookingsFileSync();

    return new Promise((resolve,resject)=>{
        fs.readFile(bookingsFile,(err,bufferData)=>{
            if(err){
                return reject(err);
            }
            try{
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            }
            catch(parseError){
                reject(parseError);
            }
        })
    });
}

function writeBookingsAsync(bookings){
    initializeBookingsFileSync();

    return new Promise((resolve,reject)=>{
        const jsonString = JSON.stringify(bookings,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString,"jsonString"));

        fs.writeFile(bookingsFile,buffer,(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Bookings file written successfully");
        });
    });
}

async function appenBookingAsync(booking){
    const bookings = await readBookingsAsync();

    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}

function appendLogAsync(message){
    ensureDirectories();
    return new Promise((resolve,reject)=>{
        const timeStamp = new Date().toISOString();
        const finalMessage = `[${timeStamp}]${message}\n`;

        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended successfully");
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();
    if(fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogsFile);
        return true;
    }
    return false;
}

function deleteArchivedLogSync(){
    ensureDirectories();
    if(fs.existsSync(archivedLogsFile)){
        fs.unlinkSync(archivedLogsFile);
        return true;
    }
    return false;
}

module.exports = {
    dataDir,
    logsDir,
    bookingsFile,
    logFile,
    archivedLogsFile,
    ensureDirectories,
    listDataFiles,
    removeLogDirectorySync,
    initializeBookingsFileSync,
    readBookingsAsync,
    readBookingsSync,
    writeBookingsAsync,
    writeFileSync,
    appenBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync
};