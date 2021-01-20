const express = require('express');
const router = express.Router();

const patientsController = require('../controllers/patientsController');

router.get('/', patientsController.showPatientList);
router.get('/add', patientsController.showPatientForm);
router.get('/edit/:patId', patientsController.showEditPatientForm);
router.get('/details/:patId', patientsController.showPatientDetails);

router.post('/add', patientsController.addPatient); 
router.post('/edit', patientsController.updatePatient);
router.get('/delete/:patId', patientsController.deletePatient);



module.exports = router;

