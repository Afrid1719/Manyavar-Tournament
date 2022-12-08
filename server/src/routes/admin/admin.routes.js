const express = require('express');
const { adminSession } = require('../../utils/session');
const router = express.Router();
const { httpCreateAdmin, httpGetAllAdmin, httpAuthenticate, httpAdminLogout, httpGetScoring } = require('./admin.controller');


router.post('/', httpCreateAdmin);
router.get('/', httpGetAllAdmin);
router.post('/authenticate', httpAuthenticate);
router.get('/logout', adminSession, httpAdminLogout);

module.exports = router;