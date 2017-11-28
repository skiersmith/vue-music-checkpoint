var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    trackName: { type: String, required: true },
    artistName: { type: String },
    trackPrice: { type: Number, },
    collectionCensoredName: { type: String },
    artworkUrl100: { type: String },
    previewUrl: { type: String }
})


module.exports = mongoose.model('Song', schema)