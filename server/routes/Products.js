const express = require('express');
const router = express.Router();
const { Products } = require('../models');
const { and } = require('sequelize');
const { Op } = require("sequelize");

router.post('/add', async (req, res) => {
    const product = req.body;
    await Products.create(product);
    res.json(product);
});

router.post('/all', async (req, res) => {
    const products = await Products.findAll({
        attributes: ['productID','productName', 'productPrice', 'productStock'],
        where: {
            productName: {
                [Op.substring]: req.body.Name
            }
        }
    });
    res.json(products);
});

module.exports = router;