const express = require('express');
const ProductController = require('./controllers/productController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', ProductController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
