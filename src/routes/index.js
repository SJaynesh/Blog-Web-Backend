const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const route = express.Router();

route.use('/auth', require('./auth/auth.route'));

route.use(authMiddleware);
route.use('/user', require('./auth/user.route'));

module.exports = route;