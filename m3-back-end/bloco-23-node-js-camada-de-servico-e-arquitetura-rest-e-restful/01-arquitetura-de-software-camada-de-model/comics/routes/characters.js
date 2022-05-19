const express = require('express');
const router = express.Router();
const charactersModel = require('../models/charactersModel');

router.get('/', async (_req, res) => {
  try {
    const [data] = await charactersModel.getAll();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal error '});
  }
});

module.exports = router;
