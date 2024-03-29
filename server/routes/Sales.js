const express = require("express");
const router = express.Router();
const { Sales } = require("../models");

router.post("/add", async (req, res) => {
  const sale = req.body;
  await Sales.create(sale);
  res.json(sale);
});

router.post("/all", async (req, res) => {
  if (req.body.Name == "") {
    const sales = await Sales.findAll({
      attributes: ["salesID", "pid", "cid", "price"],
    });
    res.json(sales);
  } else {
    const sales = await Sales.findAll({
      attributes: ["salesID", "pid", "cid", "price"],
      where: {
        salesID: req.body.Name,
      },
    });
    res.json(sales);
  }
});

module.exports = router;
