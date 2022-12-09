async function httpCurrentOverSaveBall(req, res) {
    const {data} = req.body;
    const {run, striker, matchId, teamId} = data;
    switch(run) {
        case 0: // do not change striker just update the ball count
        break;
        case 1: // Change striker 
        break;
        case 2: // same striker, just udpate run and ball count
        break;
    }
}

module.exports = {
    httpCurrentOverSaveBall
}