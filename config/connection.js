var mysql = require("mysql");

// mysql://bd7d8555359b0e:ac3b0076@us-cdbr-iron-east-05.cleardb.net/heroku_6b14f48df00b280?reconnect=true

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bd7d8555359b0e",
  password: "ac3b0076",
  database: "eroku_6b14f48df00b280"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
