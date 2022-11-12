var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CheckSchema = new Schema({
  name: { type: String, default: "" },
  value: { type: String, default: "" },
});

var DocumentCheckSchema = new Schema(
  {
    check: { type: Schema.Types.ObjectId, ref: "CheckSchema" },
    hash: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("DocumentCheck", DocumentCheckSchema);
