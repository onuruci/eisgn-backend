var express = require("express");
var router = express.Router();

var PostModel = require("../models/documentCheck");
var CheckModel = require("../models/check");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    res: "Connected",
  });
});

router.post("/newDoc", async function (req, res, next) {
  var new_check = new CheckModel({
    name: "req.body.name",
    value: "req.body.value",
  });

  var check_save = await new_check.save();

  var new_user = new PostModel({
    check: new_check,
    hash: "req.body.hash",
  });

  const result = await new_user.save();

  res.json({
    resultt: result,
  });
});

router.get("/getdocs", async (req, res, next) => {
  var allUsers = await PostModel.find({});
  res.json({
    asllUsers: allUsers,
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
