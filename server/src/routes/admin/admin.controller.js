const {createAdmin, getAllAdmin, authAdmin} = require('../../models/admin.model');

let ADMIN_ID = 1;

// const admin = {
//     adminId: ADMIN_ID,
//     name: 'developer',
//     username: 'dev',
//     password: 'dev@123'
// };

async function httpCreateAdmin(req, res) {
    let data = req.body;
    data = admin;
    if (!data.username || !data.password) {
        return res.status(400).json({
            message: "Incomplete data!!"
        });
    }

    try {
        await createAdmin(data);
        return res.status(201).json({
            message: 'Admin created!!'
        });
    } catch(e) {
        console.log(e);
        return res.status(400).json({
            message: e.message
        });
    }
}

async function httpGetAllAdmin(req, res) {
    try {
        const data = await getAllAdmin();
        return res.status(200).json({
            data: data
        });
    } catch(e) {
        return res.status(400).json({
            message: "Something went wrong!!"
        });
    }
}

async function httpAuthenticate(req, res) {
    let data = req.body;
    if (!data.username || !data.password) {
        return res.status(400).json({
            message: "Incomplete data!!",
            token: null
        });
    }
    try {
        const loggedIn = await authAdmin(data);
        if (loggedIn) {
            req.session.user = data.username;
            return res.status(200).json({
                message: true
            });
        }
        return res.status(401).json({
            message: false
        });
    } catch (e) {
        return res.status(401).json({
            message: e.message
        });
    }
}

async function httpAdminLogout(req, res) {
    req.session = null;
    return res.status(200).json({
        message: true
    });
} 

module.exports = {
    httpCreateAdmin,
    httpGetAllAdmin,
    httpAuthenticate,
    httpAdminLogout
}