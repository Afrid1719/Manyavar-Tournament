const express = require('express');
const router = express.Router();
const { httpCreateTeam, httpGetAllTeams } = require('./teams.controller');

router.get('/', httpGetAllTeams);
router.post('/', httpCreateTeam)

module.exports = router;