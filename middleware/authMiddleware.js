const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    console.log('Header received:', header);

    if(!header){
        return res.status(401).json({error: 'Unauthorized'});
    }

    const token = header.split(' ')[1];
    console.log('Token received:', token);

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