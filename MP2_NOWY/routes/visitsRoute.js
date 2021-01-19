const express = require('express');
const router = express.Router();

const visitsController = require('../controllers/visitsController');

router.get('/', visitsController.showVisitList);
router.get('/add', visitsController.showVisitForm);
router.get('/details/:visId', visitsController.showVisitDetails);

module.exports = router;

