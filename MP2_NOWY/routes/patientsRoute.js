const express = require('express');
const router = express.Router();

const patientsController = require('../controllers/patientsController');

router.get('/', patientsController.showPatientList);
router.get('/add', patientsController.showPatientForm);
router.get('/details/:patId', patientsController.showPatientDetails);

module.exports = router;

