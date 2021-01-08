
const express = require('express');
const router = express.Router();


const patientController = require('../controllers/patientController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', patientController.showMe);



module.exports = router;
