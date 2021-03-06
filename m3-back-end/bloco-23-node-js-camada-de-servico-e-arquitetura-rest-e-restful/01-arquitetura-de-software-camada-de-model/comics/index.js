const express = require('express');

const app = express();

app.use(express.json());

const charRouter = require('./routes/characters');

app.use('/characters', charRouter);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
