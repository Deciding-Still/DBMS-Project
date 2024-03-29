const express = require('express');
const router = express.Router();
const { Customer } = require('../models');

router.post('/add', async (req, res) => {
    const customer = req.body;
    await Customer.create(customer);
    res.json(customer);
});

module.exports = router;