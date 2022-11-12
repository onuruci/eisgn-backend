var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DocumentCheckSchema = new Schema(
  {
    name: { type: String, default: "" },
    value: { type: String, default: "" },
    hash: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("DocumentCheck", DocumentCheckSchema);
