const path = require('path');

const express = require('express');

const adminController = require('../controllers/shop');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProduct);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
