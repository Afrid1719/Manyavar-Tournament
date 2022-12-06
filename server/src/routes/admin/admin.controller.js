const {createAdmin, getAllAdmin} = require('../../models/admin.model');

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
    // if (!data.username || !data.password) {
    //     return res.status(400).json({
    //         error: "Incomplete data!!"
    //     });
    // }

    try {
        await createAdmin(data);
        return res.status(201).json({
            success: 'Admin created!!'
        });
    } catch(e) {
        console.log(e);
        return res.status(400).json({
            error: e.message
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
            error: "Something went wrong!!"
        });
    }
}

module.exports = {
    httpCreateAdmin,
    httpGetAllAdmin
}