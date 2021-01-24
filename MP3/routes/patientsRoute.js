const express = require('express');
const router = express.Router();
const authUtils = require('../util/authUtils');

const patientsController = require('../controllers/patientsController');

router.get('/', patientsController.showPatientList);
router.get('/add', authUtils.permitAuthenticatedUser, patientsController.showPatientForm);
router.get('/edit/:patId', authUtils.permitAuthenticatedUser, patientsController.showEditPatientForm);
router.get('/details/:patId', patientsController.showPatientDetails);

router.post('/add', authUtils.permitAuthenticatedUser, patientsController.addPatient);
router.post('/edit', authUtils.permitAuthenticatedUser, patientsController.updatePatient);
router.get('/delete/:patId', authUtils.permitAuthenticatedUser, patientsController.deletePatient);



module.exports = router;

