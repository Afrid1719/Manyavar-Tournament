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

module.exports = {
    createAdmin,
    getAllAdmin
}