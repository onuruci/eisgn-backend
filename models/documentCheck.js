var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DcumentCheckSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, default: "" },
    value: { type: String, default: "" },
    hash: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("DcumentCheck", DcumentCheckSchema);
