const express = require('express');
const router = express.Router();

const visitsController = require('../controllers/visitsController');

router.get('/', visitsController.showVisitList);
router.get('/add', visitsController.showAddVisitForm);
router.get('/edit/:visId', visitsController.showEditVisitForm);
router.get('/details/:visId', visitsController.showVisitDetails);

router.post('/add', visitsController.addVisit); 
router.post('/edit', visitsController.updateVisit);
router.get('/delete/:visId', visitsController.deleteVisit);



module.exports = router;

