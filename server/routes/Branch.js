const express = require('express');
const router = express.Router();
const { Branch } = require('../models');
const { Op } = require("sequelize");

router.post('/add', async (req, res) => {
    const branch = req.body;
    await Branch.create(branch);
    res.json(branch);
});

router.post('/all', async (req, res) => {
    const branches = await Branch.findAll({
        attributes: ['branchID', 'branchName'],
        where: {
            branchName: {
                [Op.substring]: req.body.Name
            }
        }
    });
    res.json(branches);
});

module.exports = router;