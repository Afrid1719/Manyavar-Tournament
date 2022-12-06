const express = require("express");
const api = express.Router();

const adminRoutes = require('./admin/admin.routes');

api.use('/admin', adminRoutes);

module.exports = api;