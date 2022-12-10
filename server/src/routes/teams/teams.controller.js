const { createTeam, getAllTeams, teamExists } = require('./../../models/teams/teams.model');

let TEAM_ID = 0;

async function httpCreateTeam(req, res) {
    let {data} = req.body;
    if (!data.name) {
        return res.status(400).json({
            message: "Incomplete data!!"
        });
    }
    try {
        data = {
            ...data,
            id: ++TEAM_ID
        };
        let result = await teamExists(data.id);
        if (!!result) {
            return res.status(200).json({
                data: result,
                message: 'Team already exists!!'
            });    
        }
        result = await createTeam(data);
        if (!result) {
            return res.status(500).json({
                message: 'Something went wrong!!'
            });    
        }
        return res.status(200).json({
            data: result,
            message: 'Team Created!!'
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

async function httpGetAllTeams(req, res) {
    try {
        let result = await getAllTeams();
        if (!result) {
            return res.status(500).json({
                message: 'Something went wrong!!'
            });  
        } 
        return res.status(200).json({
            data: result,
            message: 'Success'
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    httpCreateTeam,
    httpGetAllTeams
}