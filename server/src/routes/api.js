const express = require("express");
const api = express.Router();

const adminRoutes = require('./admin/admin.routes');
const scoringRoutes = require('./scoring/scoring.routes');
const teamsRoutes = require('./teams/teams.routes');
const playersRoutes = require('./players/players.routes');

api.use('/admin', adminRoutes);
api.use('/scoring', scoringRoutes);
api.use('/teams', teamsRoutes);
api.use('/players', playersRoutes);

module.exports = api;