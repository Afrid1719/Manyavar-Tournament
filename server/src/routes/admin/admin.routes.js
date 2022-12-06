const express = require('express');
const router = express.Router();
const { httpCreateAdmin, httpGetAllAdmin } = require('./admin.controller');


router.post('/', httpCreateAdmin);
router.get('/', httpGetAllAdmin);
// router.get('/authenticate', httpAuthenticate);

module.exports = router;