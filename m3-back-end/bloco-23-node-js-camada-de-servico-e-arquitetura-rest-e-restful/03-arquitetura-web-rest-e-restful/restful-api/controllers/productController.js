const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(404).json({ message: 'Invalid product informations' });
  }

  const newProduct = await ProductModel.add(name, brand);
  res.status(201).json(newProduct);
});

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});  

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Product Not found' });
  }

  res.status(200).json(product);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(404).json({ message: 'Invalid product informations' });
  }
  
  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    return res.status(404).json({ message: 'Product Not found' });
  }

  await ProductModel.update(req.params.id, name, brand);
  res.send(200).json({ name, brand });
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Product Not found' });
  }

  await ProductModel.exclude(req.params.id);
  res.status(204).json();
});

module.exports = router;
