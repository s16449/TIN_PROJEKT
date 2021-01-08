const express = require('express');
const router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('pages/doctors', { navLocation: 'emp' });


//   }); 


const doctorController = require('../controllers/doctorsController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', doctorController.showDoctorsList);

//router.get('/add', doctorController.AddPatientForm);
router.get('/details/:empId', doctorController.showDocDetails);

module.exports = router;




