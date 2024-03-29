const express = require('express');
const router = express.Router();
const { Products } = require('../models');
const { and } = require('sequelize');

router.post('/add', async (req, res) => {
    const product = req.body;
    await Products.create(product);
    res.json(product);
});

module.exports = router;