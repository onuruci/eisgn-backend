var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username : {type: String, required : true, unique: true},
        wallet : {type: String, required : true, unique: true},
        posts: {type: [Schema.Types.ObjectId], ref: 'Post'}
    },
    { timestamps: { createdAt: 'created_at' }}
);

module.exports = mongoose.model('User', UserSchema);