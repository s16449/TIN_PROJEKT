const express = require('express');
const router = express.Router();

const doctorsController = require('../controllers/doctorsController');

router.get('/', doctorsController.showDoctorList);
router.get('/add', doctorsController.showDoctorForm);
router.get('/edit/:docId', doctorsController.showEditDoctorForm);
router.get('/details/:docId', doctorsController.showDoctorDetails);


router.post('/add', doctorsController.addDoctor); 
router.post('/edit', doctorsController.updateDoctor);
router.get('/delete/:docId', doctorsController.deleteDoctor);



module.exports = router;

