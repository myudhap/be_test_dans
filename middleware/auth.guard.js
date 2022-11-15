const jwt = require('../helpers/jwt');

module.exports = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (authHeader) {
        try {
            const [n, token] = authHeader.split(" ");
            const decoded = await jwt.verifyToken(token);
            req.user = decoded;
            req.token = token;
            next();
        } catch (error) { 
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        return res.status(400).json({ message: 'Authorization header is missing' })
    }
}