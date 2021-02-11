const net = require('net');
const { connect } = require('./client');

let connection;

const setUpInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", function handleUserInput(key){
    if (key === '\u0003') { //ctrl +c
      process.exit();
    }
    if (key === 'w') { //w
      conn.write("Move: up")
    } 
    if (key === "a") { //s
      conn.write("Move: left")
    }
    if (key === "s") { //a
      conn.write("Move: down")
    }
    if (key ==="d") { // d
      conn.write("Move: right")
    }
    if (key === "i") {
      conn.write("Say: hissssssss")
    };
    if (key === "j") {
      conn.write("Say: omnomnomnomnom")
    }
  })
  return stdin;
};

/**
 * Event Handling for User Input
 */




//

module.exports = { setUpInput };