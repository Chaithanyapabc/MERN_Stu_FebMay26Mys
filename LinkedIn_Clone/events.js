//Custom EventEmitter for system events
const EventEmitter = require("events");

class AppEmitter extends EventEmitter {}

const emitter = new AppEmitter();

module.exports = emitter;