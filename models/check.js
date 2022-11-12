var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CheckSchema = new Schema({
  name: { type: String, default: "" },
  value: { type: String, default: "" },
});

module.exports = mongoose.model("Check", CheckSchema);
