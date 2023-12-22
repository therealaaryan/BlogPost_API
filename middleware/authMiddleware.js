const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('Token received:', token);

    if(!token){
        return res.status(401).json({error: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log('Decoded token:', decoded);

        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({error: 'Invalid token'})
    }
};

module.exports = authMiddleware;