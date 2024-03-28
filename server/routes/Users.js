const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { Users } = require('../models');
const { and } = require('sequelize');

router.post('/login', async (req, res) => {
    const users = await Users.findAll({
        attributes: ['password', 'role'],
        where: {
            username: req.body.username
        }
    });
    if (users.length == 0) {
        res.json({ ok: false });
    }
    else if (users[0].password == crypto.createHash('md5').update(req.body.password).digest('hex') && users[0].role == req.body.role) {
        res.json({ ok: true });
    }
    else {
        res.json({ ok: false });
    }
});

router.post('/add', async (req, res) => {
    const user = req.body;
    user.password = crypto.createHash('md5').update(user.password).digest('hex');
    await Users.create(user);
    res.json(user);
});

module.exports = router;