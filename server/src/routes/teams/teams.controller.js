const { createTeam, getAllTeams, teamExists, updateTeam, deleteTeam } = require('./../../models/teams/teams.model');

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
        let result = await teamExists(data._id);
        if (!!result) {
            return res.status(200).json({
                data: [],
                message: 'Team already exists!!'
            });    
        }
        result = await createTeam(data);
        if (!result) {
            return res.status(500).json({
                message: 'Something went wrong!!'
            });    
        }
        return res.status(201).json({
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

async function httpUpdateTeam(req, res) {
    let {data} = req.body;
    const {id} = req.params;
    if (!id || !data.name) {
        return res.status(400).json({
            message: "Incomplete data!!"
        });
    }
    try {
        let result = await updateTeam(id, data);
        console.log(result);
        if (!result) {
            return res.status(500).json({
                data: [],
                message: 'Team update failed!!'
            });    
        }
        return res.status(200).json({
            data: result,
            message: 'Team Updated!!'
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

async function httpDeleteTeam(req, res) {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            message: "Resource ID is missing!!"
        });
    }
    try {
        let result = await deleteTeam(id);
        console.log(result);
        if (!result) {
            return res.status(500).json({
                data: [],
                message: 'Team deletion failed!!'
            });    
        }
        return res.status(200).json({
            data: result,
            message: 'Team deleted!!'
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    httpCreateTeam,
    httpGetAllTeams,
    httpUpdateTeam,
    httpDeleteTeam
}