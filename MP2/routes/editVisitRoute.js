const express = require('express');
const router = express.Router();


const editVisitController = require('../controllers/editVisitController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', editVisitController.editVisit);



module.exports = router;
