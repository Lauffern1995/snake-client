let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w' ) {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
  if (data === 'p') {
    connection.write('Say: WAZZZZUUUUUUUP');
  }
  if (data === 'o') {
    connection.write('Say: OU! a peice of candy, OU! a peice of candy');
  }

};


module.exports = { setupInput } 