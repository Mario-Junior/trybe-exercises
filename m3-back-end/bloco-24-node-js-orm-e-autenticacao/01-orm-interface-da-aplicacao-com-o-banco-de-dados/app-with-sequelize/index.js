const express = require('express');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/user', userController);

app.listen(PORT, () => console.log(
  `App listening on PORT ${PORT}`
));
