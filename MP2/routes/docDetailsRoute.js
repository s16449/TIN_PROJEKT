const express = require('express');
const router = express.Router();


const docDetailsController = require('../controllers/docDetailsController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');

router.get('/', docDetailsController.showDocDetails);

module.exports = router;

