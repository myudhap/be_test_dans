const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyToken = (token) => jwt.verify(token, config.jwt.secret);

exports.createToken = (data) => jwt.sign(data, config.jwt.secret);