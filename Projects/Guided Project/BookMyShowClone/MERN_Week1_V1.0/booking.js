//Handling booking related operatins
const bookingEmitter = require("./events");
let currentBooking = null;

function getCurrentBooking(){
    return currentBooking;
}

function clearCurrentBooking(){
    currentBooking = null;
}

function checkDuplicateBooking(movie,showtime,seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(
                currentBooking &&
                currentBooking.movie.id === movie.id &&
                currentBooking.time === showtime.time &&
                currentBooking.seatCount === seatCount
            ){
                return reject("Duplicate booking detected. Ticket already booked");
            }
            resolve("No Duplicate booking found.");
        },300);
    });
}

function checkSeatAvailability(showtime,seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(showtime.seatAvailable < seatCount){
                return reject(`Only ${showtime.seatAvailable} seat(s) are available for the selected showtime.`);
            }
        },300);
    });
}

function generateBookingDetails(movie,showtime,seatCount){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const booking ={
                bookingId:`BOOK-${Date.now()}`,
                movieId:movie.id,
                movieTitle:movie.title,
                time:showtime.time,
                seatCount:seatCount
            }
            resolve(booking);
        },300);
    });
}

function confirmBooking(booking){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            showtime.seatAvailable -= booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("bookingConfigured",booking);
            resolve(booking);
        },300);
    });
}

//Promise chaining
function processBooking(movie,showtime,seatCount){
    bookingEmitter.emit("bookingStarted");

    return checkDuplicateBooking(movie,showtime,seatCount)
    .then(()=>{
        bookingEmitter.emit("bookingValidated");
        return checkSeatAvailability(showtime,seatCount);
    })
    .then(()=>generateBookingDetails(movie,showtime,seatCount))
    .then((booking)=>confirmBooking(booking))
    .catch((error)=>{
        bookingEmitter.emit("bookingFailed",error);
        throw error;
    });
}

// async/await
async function processBookingAsync(movie,showtime,seatCount){
    try{
        bookingEmitter.emit("bookingStarted");

        await checkDuplicateBooking(movie,showtime,seatCount);
        bookingEmitter.emit("bookingValidated");

        await checkSeatAvailability(showtime,seatCount);

        const booking = await generateBookingDetails(movie,showtime,seatCount);

        const confirmBooking = await confirmBooking(booking,showtime);
        return confirmBooking;
    }
    catch(error){
        bookingEmitter.emit("bookingFailed",error);
        throw error;
    }
}

module.exports = {
    getCurrentBooking,
    clearCurrentBooking,
    processBooking,
    processBookingAsync
}