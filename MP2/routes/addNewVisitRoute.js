
const express = require('express');
const router = express.Router();


const addNewVisitController = require('../controllers/addNewVisitController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', addNewVisitController.addNewVisit);



module.exports = router;
