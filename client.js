const net = require('net');
const { IP, PORT } = require("./constants")
/**
 * 
 * Sets up cxn to lhl server
 * swap to host: 'localhost' and port: '8001' for running your own server 
 * (also clone this: https://github.com/lighthouse-labs/snek-multiplayer && run npm install && npm run play to set server up)
 * 
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interprets incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => {
    console.log("Sssuccessssfully Connected to Sssnek Ssserver");
    conn.write("Name: MET")
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

//

module.exports = { connect } ;