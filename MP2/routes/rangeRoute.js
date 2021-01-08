const express = require('express');
const router = express.Router();


const rangeController = require('../controllers/rangeController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', rangeController.showRangeInfo);



module.exports = router;
