const jsonwebtoken = require('jsonwebtoken')
const {jwtSecret} = require('../config/config')

// validate user token and check token provided or not
const authValidator = function (req, res, next) {
    let token = req.headers['x-access-token'];
    if (!token) return res
        .status(401)
        .send({ auth: false, info: "No token provided" });
        jsonwebtoken.verify(token, jwtSecret, function (err, decoded) {
        if (err) return res
            .status(500)
            .send({ auth: false, info: "Failed to authenticate token." });
        req['token'] = decoded;
        next();
    });

}


module.exports = authValidator