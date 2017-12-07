var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.put("/api/eat/:id", function(req, res) {
  // console.log(req);
  var id = req.params.id;
  id = parseInt(id);
  // console.log(id);
  burger.update(id, function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/order", function(req, res) {
  var name = req.body.name;
  burger.insertOne(name, function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
