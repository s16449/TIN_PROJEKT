

const express = require('express');
const router = express.Router();


const contactController = require('../controllers/contactController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', contactController.showContact);



module.exports = router;
