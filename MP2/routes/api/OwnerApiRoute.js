const express = require('express');
const router = express.Router();

const ownApiController = require('../../api/OwnerAPI');

router.get('/', ownApiController.getOwners);
router.get('/:ownId', ownApiController.getOwnerById);
router.post('/', ownApiController.createOwner);
router.put('/:ownId', ownApiController.updateOwner);
router.delete('/:ownId', ownApiController.deleteOwner);

module.exports = router;

