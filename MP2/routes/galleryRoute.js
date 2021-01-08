

const express = require('express');
const router = express.Router();


const galleryController = require('../controllers/galleryController');
//const patientRegisterFormController  = require('../controllers/patientRegisterFormController');
router.get('/', galleryController.showPhotos);



module.exports = router;
