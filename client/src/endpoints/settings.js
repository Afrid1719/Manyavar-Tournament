const HOST = 'http://192.168.0.100:8000';
const apiV1 = `${HOST}/v1`;

// Admin.
export const adminV1 = `${apiV1}/admin`;
export const adminV1Auth = `${adminV1}/authenticate`;
export const adminV1Logout = `${adminV1}/logout`;