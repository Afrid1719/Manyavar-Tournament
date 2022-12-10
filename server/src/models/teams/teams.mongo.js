const mongoose = require('mongoose');

let schema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    players: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Player'
    }]
});

module.exports = mongoose.model('Team', schema);