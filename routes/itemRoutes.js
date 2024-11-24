const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/', itemController.getItems);
router.get('/create', itemController.getCreateForm);
router.post('/create', itemController.createItem);
router.get('/edit/:id', itemController.getEditForm);
router.post('/edit/:id', itemController.updateItem);
router.get('/delete/:id', itemController.deleteItem);

module.exports = router;
