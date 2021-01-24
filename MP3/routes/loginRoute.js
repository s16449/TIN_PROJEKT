const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');



router.get('/', AuthController.showPage);


module.exports = router;