const AdminModel = require('./admin.mongo');
const bcrypt = require('bcrypt');

async function createAdmin(user = admin) {
    const adminExists = await AdminModel.exists({username: user.username});
    try {
        if (!!adminExists) {
            throw new Error("Admin already created!!");
        }
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(user.password, salt);
        const doc = new AdminModel({
            adminId: user.adminId,
            name: user.name,
            username: user.username,
            password: hash
        });
        await doc.save();
    } catch (e) {
        throw new Error(e.message);
    }
}

async function getAllAdmin() {
    return await AdminModel.find({}, {
            '_id': 0, '__v': 0
        });
}

async function authAdmin(user) {
    const userFound = await AdminModel.find({username: user.username});
    if (!userFound.length) {
        throw new Error('User not found!!');
    }
    try {
        let pass = user.password;
        let result = await bcrypt.compare(pass, userFound[0].password);
        return {result: result, adminId: userFound[0]._id.toString()};
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = {
    createAdmin,
    getAllAdmin,
    authAdmin
}