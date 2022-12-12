const { createPlayer, getAllPlayers } = require("../../models/players/players.model");

async function httpCreatePlayer(req, res) {
    let {data} = req.body; // Expect an array of player(s)
    try {
        if (!data.teamId || !data.players.length) {
            return res.status(400).json({
                message: 'Incomplete data!!'
            });
        }
        result = await createPlayer(data);
        if (!result) {
            return res.status(500).json({
                message: 'Something went wrong!!'
            });    
        }
        return res.status(201).json({
            data: [],
            message: 'Player Updated!!'
        });
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

async function httpGetAllplayers(req, res) {
    try {
        let result = await getAllPlayers();
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

async function httpUpdatePlayer(req, res) {
    let {data} = req.body;
    const {id} = req.params;
    if (!data.length) {
        return res.status(400).json({
            message: "Incomplete data!!"
        });
    }
    try {
        let result = await updateTeam(id, data);
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

async function httpDeletePlayer(req, res) {
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
                message: 'Player deletion failed!!'
            });    
        }
        return res.status(200).json({
            data: result,
            message: 'Player deleted!!'
        })
    } catch(e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    httpCreatePlayer,
    httpGetAllplayers,
    httpUpdatePlayer,
    httpDeletePlayer
}