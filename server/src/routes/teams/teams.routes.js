const express = require('express');
const router = express.Router();
const { httpCreateTeam, httpGetAllTeams, httpUpdateTeam, httpDeleteTeam } = require('./teams.controller');

router.get('/', httpGetAllTeams);
router.post('/', httpCreateTeam);
router.put('/:id', httpUpdateTeam);
router.delete('/:id', httpDeleteTeam);

module.exports = router;