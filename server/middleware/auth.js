const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    const token = authHeader.split(" ")[1];
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).send("Token is not valid!");
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).send("Not authenticated");
    }
};

const authertization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

module.exports = { authertization, verifyAdmin };