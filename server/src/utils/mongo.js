const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
    console.log('MongoDB connected!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(process.env.DB_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {mongoConnect, mongoDisconnect};