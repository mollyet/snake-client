
const net = require('net');
const { connect } = require('./client');
console.log("Connecting . . . ");
connect();

const setUpInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
setUpInput();

/**
 * Event Handling for User Input
 */


const handleUserInput = function (data) {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};
handleUserInput();

