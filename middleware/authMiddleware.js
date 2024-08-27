const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        console.error('No token provided'); 
        return res.redirect('/login').status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log('Decoded token:', decoded);  

 
        req.user = {
            userId: decoded.user.id,
            role: decoded.user.role   ,
            username:decoded.user.username
        };

        if (req.user.role === 'employee') {
            next();
        } else {
            res.redirect('/login');  

        }
    } catch (err) {
        res.redirect('/login');  // Redirect on token error

    }
};

module.exports = adminMiddleware;
