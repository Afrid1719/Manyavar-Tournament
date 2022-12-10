const express = require('express');
const router = express.Router();
const { httpGetAllplayers, httpCreatePlayer } = require('./players.controller');

router.get('/', httpGetAllplayers);
router.post('/', httpCreatePlayer);

module.exports = router;