var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, result) {
      cb(result);
    });
  },

  insertOne: function(table, param, value, cb) {
    // var queryString = "INSERT INTO ?? (??) VALUE ??;";
    var query = "INSERT INTO ";
    query += table;
    query += " (";
    query += param;
    query += ") VALUE ('";
    query += value;
    query += "');";
    // console.log(query);
    connection.query(query, function(err, result) {
      cb(result);
    });
  },

  updateOne: function(table, param, new_value, key_name, key_value, cb) {
    var query = "UPDATE ";
    query += table;
    query += " SET ";
    query += param;
    query += " = ";
    query += new_value;
    query += " WHERE ";
    query += key_name;
    query += " = ";
    query += key_value;
    query += ";";
    // console.log(query);
    connection.query(query, function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;
