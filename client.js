const net = require('net');
/**
 * 
 * Sets up cxn to lhl server
 * swap to host: 'localhost' and port: '8001' for running your own server 
 * (also clone this: https://github.com/lighthouse-labs/snek-multiplayer && run npm install && npm run play to set server up)
 * 
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interprets incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => {
    console.log("Successssfully Connected to Sssnek Ssserver");
    conn.write("Name: MET")
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

//

module.exports = { connect } ;