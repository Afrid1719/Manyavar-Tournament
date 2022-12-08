const express = require("express");
const api = express.Router();

const adminRoutes = require('./admin/admin.routes');
const scoringRoutes = require('./scoring/scoring.routes');

api.use('/admin', adminRoutes);
api.use('/scoring', scoringRoutes);

module.exports = api;