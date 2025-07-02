const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded JWT:', decoded);
      req.user = await User.findById(decoded.id).select('-password');
      console.log('User from DB:', req.user);
      console.log("User Logged in");
      return next();
    } catch (error) {
      return res.status(401).json({ error: 'Not authorized, invalid token' });
    }
  }

  return res.status(401).json({ error: 'Not authorized, no token' });
};

module.exports = { protect };