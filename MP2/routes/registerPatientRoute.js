const express = require('express');
const router = express.Router();


const registerPatientController = require('../controllers/registerPatientController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', registerPatientController.registerNewPatient);
console.log(registerPatientController);


module.exports = router;
