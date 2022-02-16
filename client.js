const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Welcome to SNEK!!');
    conn.write('Name: NCL');
  
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  
  });

  return conn;
};


module.exports = { connect } 