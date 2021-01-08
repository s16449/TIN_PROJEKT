
const express = require('express');
const router = express.Router();


const loginController = require('../controllers/loginController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', loginController.login);



module.exports = router;
