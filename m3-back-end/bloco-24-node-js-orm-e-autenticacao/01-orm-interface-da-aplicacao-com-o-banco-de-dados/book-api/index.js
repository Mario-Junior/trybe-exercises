const express = require('express');
const app = express();
const BooksController = require('./src/controllers/BooksController');

app.use(express.json());

app.use('/', BooksController);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(
  `App listening on PORT ${PORT}`
));
