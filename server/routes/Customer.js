const express = require('express');
const router = express.Router();
const { Customer } = require('../models');
const { Op } = require("sequelize");

router.post('/add', async (req, res) => {
    const customer = req.body;
    await Customer.create(customer);
    res.json(customer);
});

router.post('/all', async (req, res) => {
    const customer = req.body;
    const customers = await Customer.findAll({
        attributes: ['customerID','customerName'],
        where: {
            customerName: {
                [Op.substring]: req.body.Name
            }
        }
    });
    res.json(customers);
});

module.exports = router;