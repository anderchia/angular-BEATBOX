const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema (
    {
        title: {type: String, required:true},
        year: {type: Number, required:true},
        artist: {type: String, required: true},
        reproductions: {type: Number, required:true},
    },
    {
        timestamps: true,
    }
);

const Song = mongoose.model("Song", songSchema);
module.exports = Song;