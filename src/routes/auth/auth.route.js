const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth/auth.controller');

const multer = require('multer');
const { storage } = require("../../config/cloudinary.config");

const upload = multer({ storage });

const route = express.Router();

route.post('/register', upload.single('profile_image'), registerUser);
route.post('/login', loginUser);

// 8000/api/auth/register
// 8000/api/auth/login

module.exports = route;