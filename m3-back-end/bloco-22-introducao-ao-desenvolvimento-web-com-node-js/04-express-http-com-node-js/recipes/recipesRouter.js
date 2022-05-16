const express = require('express');
const router = express.Router();

const authMiddleware = require('./middlewares/auth-middleware');
router.use(authMiddleware)

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 30.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || typeof(price) !== 'number' || price < 0)
    return res.status(400).json({ message: 'Invalid data!' });

  next();
};

router.post('/', validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user; // Aqui acessamos o usuário encontrado no middleware de autenticação
  recipes.push({ id, name, price, waitTime, chef: username }); // Aqui passo a informação para esse objeto da rota
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.get('/', function (_req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});

router.get('/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase())
  && recipe.price >= Number(minPrice)
  && recipe.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
  res.status(200).json(recipe);
});

router.put('/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found! '});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  
  res.status(204).end();
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found! '});

  recipes.splice(recipeIndex, 1);
  
  res.status(204).end();
});

module.exports = router;
