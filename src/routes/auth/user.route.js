const express = require('express');
const { getAllUsers, getUserProfile, deleteUser } = require('../../controllers/auth/user.controller');

const route = express.Router();

route.get('/', getAllUsers);
route.get('/profile', getUserProfile)
route.delete('/', deleteUser)

module.exports = route;