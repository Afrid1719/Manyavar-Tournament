const mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]
});

module.exports = mongoose.model('Team', schema);