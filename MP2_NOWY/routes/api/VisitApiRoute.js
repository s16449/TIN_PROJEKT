const express = require('express');
const router = express.Router();

const visApiController = require('../../api/VisitAPI');

router.get('/', visApiController.getVisits);
router.get('/:visId', visApiController.getVisitById);
router.post('/', visApiController.createVisit);
router.put('/:visId', visApiController.updateVisit);
router.delete('/:visId', visApiController.deleteVisit);

module.exports = router;

