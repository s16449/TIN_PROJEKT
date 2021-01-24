const express = require('express');
const router = express.Router();

const docApiController = require('../../api/DoctorAPI');

router.get('/', docApiController.getDoctors);
router.get('/:docId', docApiController.getDoctorById);
router.post('/', docApiController.createDoctor);
router.put('/:docId', docApiController.updateDoctor);
router.delete('/:docId', docApiController.deleteDoctor);

module.exports = router;

