var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
    {
        paragraph: {type: String, default: ""},
        post: {type: Number, default: 0},
        owner: {type: String, default: ""}
    },
    { timestamps: { createdAt: 'created_at' }}
);

module.exports = mongoose.model('Comment', CommentSchema);