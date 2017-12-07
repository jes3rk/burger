var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", cb);
  },
  insertOne: function(name, cb) {
    orm.insertOne("burgers", "burger_name", name, cb);
  },
  update: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, "id", id, cb);
  }
};

module.exports = burger;
