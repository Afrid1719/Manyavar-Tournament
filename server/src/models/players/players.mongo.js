const mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = mongoose.model('Player', schema);