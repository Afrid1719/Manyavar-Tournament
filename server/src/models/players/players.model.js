const PlayerModel = require('./players.mongo');
const TeamModel = require('./../teams/teams.mongo');

async function createPlayer({teamId, players}) {
    try {
        const team = await TeamModel.findById(teamId);
        let docsToSave = [];
        for (let player of players) {
            if (!player.id) {
                docsToSave.push(new PlayerModel({name: player.name, teamId: team._id}));
            } else {
                if (player.name === '') {
                    docsToSave.push(await PlayerModel.findByIdAndDelete(player.id));
                } else {
                    docsToSave.push(await PlayerModel.findOneAndUpdate({_id: player.id, teamId: team._id}, {name: player.name}));
                }
            }
        }
        let result = await PlayerModel.bulkSave(docsToSave);
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