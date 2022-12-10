const PlayerModel = require('./players.mongo');

async function createPlayer(data) {
    try {
        console.log('Player', data);
        let player = new PlayerModel(data);
        let result = await player.save();
        return result;
    } catch (e) {
        console.log(e.message);
        throw new Error('Something went wrong!!');
    }
}

async function playerExists(id) {
    try {
        let result = await PlayerModel.exists({id: id});
        return result;
    } catch(e) {
        console.log(e.message);
        return false;
    }
}

async function getAllPlayers() {
    try {
        let result = await PlayerModel.find({});
        return result
    } catch (e) {
        console.log(e.message);
        throw new Error('Something went wrong!!');
    }
}

module.exports = {
    createPlayer,
    getAllPlayers,
    playerExists
}