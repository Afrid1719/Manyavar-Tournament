function adminSession(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({
            message: "Invalid session",
            token: null
        });
    }
    next();
}

module.exports = {
    adminSession
}