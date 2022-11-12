var express = require("express");
var router = express.Router();

var PostModel = require("../models/documentCheck");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    res: "Connected",
  });
});

router.get("/newDoc", async function (req, res, next) {
  var new_user = new PostModel({
    name: req.body.name,
    url: req.body.date,
    hash: req.body.hash,
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

module.exports = router;
