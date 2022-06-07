// Para diminuição de complexidade do exercício, não foi seguida arquitetura MSC
// * Isso não é uma boa prática e deve ser evitado! *
// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: 'addresses' }],
    });

    if (! employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
