//This file creates and exportsa custom EventEmitter instance
const EventEmitter = require("events");

//Custom EventEmitter object
const bookingEmitter = new EventEmitter();

module.exports = bookingEmitter;