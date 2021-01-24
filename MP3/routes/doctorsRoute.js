const express = require('express');
const router = express.Router();
const authUtils = require('../util/authUtils');

const doctorsController = require('../controllers/doctorsController');

router.get('/', doctorsController.showDoctorList);
router.get('/add', authUtils.permitAuthenticatedUser, doctorsController.showDoctorForm);
router.get('/edit/:docId', authUtils.permitAuthenticatedUser,doctorsController.showEditDoctorForm);
router.get('/details/:docId', doctorsController.showDoctorDetails);


router.post('/add', authUtils.permitAuthenticatedUser,doctorsController.addDoctor); 
router.post('/edit',authUtils.permitAuthenticatedUser, doctorsController.updateDoctor);
router.get('/delete/:docId', authUtils.permitAuthenticatedUser,doctorsController.deleteDoctor);



module.exports = router;

