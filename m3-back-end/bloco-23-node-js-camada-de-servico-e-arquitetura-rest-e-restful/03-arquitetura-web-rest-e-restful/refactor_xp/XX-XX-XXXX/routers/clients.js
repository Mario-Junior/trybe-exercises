const express = require('express');
const middlewares = require('../middlewares/validation');
// const database = require('../database');
const clientController = require('../controllers/clientControllers');

const router = express.Router();

// Listando todas as pessoas
router.get('/', clientController.getAll);

// Cadastrando nova pessoa
// router.post('/',
//   middlewares.isValidName,
//   (req, res) => {
//     const newClient = {
//       ...req.body,
//       id: database.length + 1,
//     };

//     database.push(newClient);

//     res.status(201).json({ clients: database[database.length-1] });
//   }
// );

module.exports = router;
