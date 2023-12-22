const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        requried:true
    }
});

module.exports = mongoose.model('Post', postSchema);