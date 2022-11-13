var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChckSchema = new Schema({
  name: { type: String, default: "" },
  value: { type: String, default: "" },
});

module.exports = mongoose.model("Chck", ChckSchema);
