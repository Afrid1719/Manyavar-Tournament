const express = require('express');
const router = express.Router();
const { httpCreateAdmin, httpGetAllAdmin, httpAuthenticate, httpAdminLogout } = require('./admin.controller');


router.post('/', httpCreateAdmin);
router.get('/', httpGetAllAdmin);
router.post('/authenticate', httpAuthenticate);
router.get('/logout', httpAdminLogout);

module.exports = router;