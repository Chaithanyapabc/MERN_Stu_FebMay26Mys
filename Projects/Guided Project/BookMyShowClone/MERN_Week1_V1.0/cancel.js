//cancel.js 
//To cancel the existing booking if exists
const bookingEmitter = require("./events");
const { getCurrentBooking, clearCurrentBooking } = require("./booking");

function cancelBooking(){
    const currentBooking = getCurrentBooking();
    if(!booking){
        bookingEmitter.emit("booking Failed","No active booking found to cancel.");
        return null;
    }
    const movie = movie.find((m).id === booking.movieId);
    if(!movie){
        bookingEmitter.emit("bookingFailed","Movie date not found while cancelling booking.");
        return null;
    }
    const showtime = movie.showtimes.find((show)=>show.time.toLowerCase() === booking.time.toLowerCase());
    if(!showtime){
        bookingEmitter.emit("bookingFailed","Showtime data not found");
        return null;
    }

    //restore seats
    showtime.seatAvailable += booking.seatCount;

    //clear current Booking
    clearCurrentBooking();

    bookingEmitter.emit("bookingCancelled",booking);

    return booking;
}
module.exports = {
    cancelBooking
};