
const express = require('express');
const router = express.Router();


const patientEditController = require('../controllers/patientEditController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', patientEditController.edit);



module.exports = router;
