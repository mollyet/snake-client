const net = require('net');
const { connect } = require('./client');

const setUpInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

/**
 * Event Handling for User Input
 */


const handleUserInput = function (data) {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};



//

module.exports = { setUpInput };