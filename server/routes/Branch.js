const express = require('express');
const router = express.Router();
const { Branch } = require('../models');

router.get('/', async (req, res) => {
    const branches = await Branch.findAll();
    res.json(branches);
});

router.post('/', async (req, res) => {
    const branch = req.body;
    await Branch.create(branch);
    res.json(branch);
});

module.exports = router;