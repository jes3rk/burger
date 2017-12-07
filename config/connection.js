var mysql = require("mysql");

// mysql://b0e64bf740933a:76818c4b@us-cdbr-iron-east-05.cleardb.net/heroku_bfcd5d8ae4c847d?reconnect=true

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b0e64bf740933a",
  password: "76818c4b",
  database: "heroku_bfcd5d8ae4c847d"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
