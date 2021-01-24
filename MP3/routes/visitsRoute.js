const express = require('express');
const router = express.Router();
const authUtils = require('../util/authUtils');

const visitsController = require('../controllers/visitsController');

router.get('/', visitsController.showVisitList);
router.get('/add', authUtils.permitAuthenticatedUser, visitsController.showAddVisitForm);
router.get('/edit/:visId', authUtils.permitAuthenticatedUser, visitsController.showEditVisitForm);
router.get('/details/:visId', visitsController.showVisitDetails);

router.post('/add', authUtils.permitAuthenticatedUser, visitsController.addVisit);
router.post('/edit', authUtils.permitAuthenticatedUser, visitsController.updateVisit);
router.get('/delete/:visId', authUtils.permitAuthenticatedUser, visitsController.deleteVisit);



module.exports = router;

