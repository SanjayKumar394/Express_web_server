const logEvent = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//initialize the object
const myEmitter = new MyEmitter();

//add listeners for events
myEmitter.on("log", (msg) => logEvent(msg));

//emit the log event
setTimeout(() => {
  myEmitter.emit("log", "Log Event Emitted👍");
}, 2000);
