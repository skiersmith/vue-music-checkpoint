var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String },
    price: { type: Number, },
    album: { type: String },
    description: { type: String },
    img: { type: String },
    preview: { type: String }
})


module.exports = mongoose.model('Song', schema)