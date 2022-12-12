const HOST = 'http://localhost:8000';
const apiV1 = `${HOST}/v1`;

// Admin.
export const adminV1 = `${apiV1}/admin`;
export const adminV1Auth = `${adminV1}/authenticate`;
export const adminV1Logout = `${adminV1}/logout`;

// Scoring.
export const scoringV1 = `${apiV1}/scoring`;
export const saveBallV1 = `${apiV1}/scoring/current-over/save-ball`;

// Teams.
export const teamsV1 = `${apiV1}/teams`;