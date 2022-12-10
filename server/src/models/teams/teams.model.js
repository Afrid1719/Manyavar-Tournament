const TeamModel = require('./teams.mongo');

async function createTeam(data) {
    try {
        let team = new TeamModel(data);
        let res = await team.save();
        return res;
    } catch (e) {
        console.log(e.message);
        throw new Error('Something went wrong!!');
    }
}

async function teamExists(id) {
    try {
        let result = await TeamModel.exists({id: id});
        return result;
    } catch(e) {
        console.log(e.message);
        return false;
    }
}

async function getAllTeams() {
    try {
        let result = await TeamModel.find({}).populate('players').exec();
        return result
    } catch (e) {
        console.log(e.message);
        throw new Error('Something went wrong!!');
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    teamExists
}