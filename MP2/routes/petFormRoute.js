const express = require('express');
const router = express.Router();


const petFormController = require('../controllers/petFormController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', petFormController.AddPetForm);



module.exports = router;
