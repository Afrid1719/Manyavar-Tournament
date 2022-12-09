const express = require('express');
const { adminSession } = require('../../utils/session');
const { httpCurrentOverSaveBall } = require('./scoring.controller');
const router = express.Router();

router.use('/', adminSession);

// Overs
router.post('/current-over/save-ball', httpCurrentOverSaveBall);

module.exports = router;