const express = require('express');
const router = express.Router();


const docController = require('../controllers/docController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', docController.showMyPanel);
// router.get('/', docController.showPatients);
//router.get('/details/:visId', docController.showVisitDetails);
router.get('/add', docController.showAddPatientForm);
router.get('/edit/:patId', docController.showEditPetForm);
router.get('/details/:patId', docController.showPetDetails);

module.exports = router;
