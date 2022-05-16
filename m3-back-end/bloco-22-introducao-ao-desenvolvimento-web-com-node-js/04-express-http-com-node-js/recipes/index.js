const express = require('express');
const authMiddleware = require('./middlewares/auth-middleware');
const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors());

app.get('/open', (req, res) => {
  res.send('open!');
});

const recipesRouter = require('./recipesRouter');

app.use(authMiddleware);

app.use('/recipes', recipesRouter);

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink added successfully!'});
});

app.get('/drinks', function (_req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks
    .filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));
  
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  if(!drink) return res.status(404).json({message: 'No Orange Juice here!'});
  res.status(200).json(drink);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === +id);

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found! '});

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };
  
  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinksIndex = drinks.findIndex((drinks) => drinks.id === +id);

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drink not found! '});

  drinks.splice(drinksIndex, 1);
  
  res.status(204).end();
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// Exercícios 22.5 - Express - Middlewares
// Middlewares
// 1. No código apresentado acima, remova a função next() do middleware validateName. Faça uma requisição para a rota POST /recipes com um body válido (contendo id, name e price). A requisição irá retornar algo? Por quê?
// R: A requisição não retorna nada, pois a operação fica presa no middleware sem a função next() para dar continuidade ao fluxo.