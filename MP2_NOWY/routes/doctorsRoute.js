const express = require('express');
const router = express.Router();

const doctorsController = require('../controllers/doctorsController');

router.get('/', doctorsController.showDoctorList);
router.get('/add', doctorsController.showDoctorForm);
router.get('/details/:docId', doctorsController.showDoctorDetails);

module.exports = router;

