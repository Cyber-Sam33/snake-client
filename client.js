const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  //not sure if in right spot
  conn.on("data", (data) => {
    console.log("Name: ", data);
  });

  // conn.on("Move: up", (data) => {
  //   console.log("Move: up ", data);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on("connect", (data) => {
  //   console.log(`${data}`);
  //   // code that does something when the connection is first established

  conn.on("connect", () => {
    console.log(`Successfully connected to game server.`);
    conn.write("Name: Sam");
    // conn.write("Move: up");
  });

  // });

  return conn;
};

module.exports = {
  connect, // remember this ES6 shorthand means the key and value have the same name 
};



