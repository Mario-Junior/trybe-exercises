const express = require('express');

const MoviesController = require('./controllers/movieController');

const app = express();

app.use(express.json());

app.post('/movies', MoviesController.create);

const PORT = process.env.MYSQL_PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
