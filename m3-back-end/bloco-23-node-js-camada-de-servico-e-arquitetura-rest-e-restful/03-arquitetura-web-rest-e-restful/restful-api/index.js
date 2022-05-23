const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/products', require('./controllers/productController'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
