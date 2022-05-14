/* index.js */
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 30.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (_req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/recipes/search', function (req, res) {
  const { name, minPrice, maxPrice } = req.query;
  const filteredRecipes = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase())
  && recipe.price >= Number(minPrice)
  && recipe.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
  res.status(200).json(recipe);
});

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (_req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  if(!drink) return res.status(404).json({message: 'No Orange Juice here!'});
  res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
