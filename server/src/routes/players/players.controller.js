const { createPlayer, getAllPlayers, playerExists } = require("../../models/players/players.model");

let PLAYER_ID = 0;

async function httpCreatePlayer(req, res) {
    let {data} = req.body;
    try {
        data = {
            ...data,
            id: ++PLAYER_ID
        };
        let result = await playerExists(data.id); 
        if (!!result) {
            return res.status(200).json({
                data: result,
                message: 'Player already exists!!'
            });    
        }
        result = await createPlayer(data);
        if (!result) {
            return res.status(500).json({
                message: 'Something went wrong!!'
            });    
        }
        return res.status(200).json({
            data: result,
            message: 'Player Created!!'
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

module.exports = {
    httpCreatePlayer,
    httpGetAllplayers
}