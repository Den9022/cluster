var express = require("express");
var router = express.Router();
//var redis = require("../db/db");
var output = require("./../test_groups.json");
//const { exec } = require('./../../klaszterezo_algoritmus_bin/lexunit-exercise-linux-amd64');

router.route("/back").post((req, res) => {
  console.log(req.body);
  let treshold = req.body.data.treshold;
  let groups = [];
  var groupData = req.body.data.inputs;;
  for (let i = 0; i < groupData.length; i++) {
    let id = groupData[i].id;
    let items =groupData[i].items;
    groups[id] = items
  }
  /*exec(`cat ${groups} ${treshold}`, (err, stdout, stderr) => {
    if (err) {
      console.log("nem fut");
      return;
    }
  
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });*/
  console.log(groups);

  //redis.write('key1', req.body.data)
  //redis.read('key1');
});

router.route("/groups").get((req, res) => {
  res.send(output);
});

module.exports = router;
