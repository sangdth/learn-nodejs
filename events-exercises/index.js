var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

/**
 * ######### Event Emitter: Exercise 1 #########
 * “Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.”
 */
var Ticker = function () {
  var self = this; // use it inside function below
  setInterval(function () {
    self.emit('tick');
  }, 1000);
}

util.inherits(Ticker, EventEmitter);

/**
 * “Build a script that instantiates one Ticker and bind to the “tick” event,
 * printing “TICK” every time it gets one.”
 */
var demoTick = new Ticker();

demoTick.on('tick', function () {
  console.log('Listen and received a TICK on: ' + Date());
})

/**
 * Read stream example
 */
// var readStream = fs.createReadStream('./test/text.txt');
// readStream.on('data', function (data) {
//   console.log(data.toString());
// })