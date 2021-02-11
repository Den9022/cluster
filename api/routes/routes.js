var express = require("express");
var router = express.Router();
var redis = require("../db/db");
var cluster = require("cluster")

var groups = {};

router.route("/back").post((req, res) => {
  console.log("reqbody: " , req.body);

  groups = cluster.grouping(req.body)
  //redis.write('key1', req.body.data)
  //redis.read('key1');
});

router.route("/groups").get((req, res) => {
  res.send(groups);
});

module.exports = router;
