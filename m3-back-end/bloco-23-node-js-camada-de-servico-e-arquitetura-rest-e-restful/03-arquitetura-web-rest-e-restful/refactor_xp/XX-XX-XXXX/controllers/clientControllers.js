const clientModel = require('../models/ClientModel');

const getAll = async (_req, res) => res.status(200).json(await clientModel.getAll());

module.exports = {
  getAll,
};
