
const express = require('express');
const router = express.Router();


const visitDetailsController = require('../controllers/visitDetailsController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', visitDetailsController.showVisit);



module.exports = router;
