const express = require('express');
const router = express.Router();
const { Sales } = require('../models');

router.post('/add', async (req, res) => {
    const sale = req.body;
    await Sales.create(sale);
    res.json(sale);
});

module.exports = router;