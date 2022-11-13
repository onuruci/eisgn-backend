var express = require("express");
var router = express.Router();

var PostModel = require("../models/documentCheck");
var CheckModel = require("../models/check");
const { use } = require("express/lib/application");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    res: "Connected",
  });
});

///New Check

router.post("/newDoc", async function (req, res, next) {
  let user_len = await PostModel.find({});

  var new_user = new PostModel({
    _id: user_len.length + 1,
    name: req.body.name,
    value: req.body.value,
    hash: req.body.hash,
    address: req.body.address,
  });

  const result = await new_user.save();

  res.json({
    resultt: result,
  });
});

/// Get personal checks

router.post("/getchecks", async (req, res, next) => {
  console.log("ADDRESS:  ", req.body.addr);
  console.log(req.body);
  var checks = await PostModel.find({ address: req.body.addr });

  res.json({
    checks: checks,
  });
});

/// Get Checks

router.get("/getdocs", async (req, res, next) => {
  var allUsers = await PostModel.find({});

  var user = allUsers.at(15);

  var check = await CheckModel.findById(user.check);

  res.json({
    hash: user,
    check: check,
  });
});

router.get("/getcheck", async (req, res, next) => {
  var check = await CheckModel.findById("636fc5dd32038156c6b7a137");

  console.log(check);

  res.json({
    check: check,
  });
});

module.exports = router;
