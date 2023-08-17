const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).send("Token is not valid!");
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).send("Not authenticated");
    }
};