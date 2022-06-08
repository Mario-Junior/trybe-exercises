// Para diminuição de complexidade do exercício, não foi seguida arquitetura MSC
// * Isso não é uma boa prática e deve ser evitado! *
// index.js
const express = require('express');
const { Address, Employee } = require('./models');
const Sequelize = require('sequelize'); // importação do sequelize
const config = require('./config/config'); // importação do config

const app = express();

app.use(express.json());

const sequelize = new Sequelize(config.development); // instanciamento do Sequelize com config.development

app.post('/employees', async (req, res) => {
  // Iniciando a transação
  const tr = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Executo as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: tr },
      );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: tr },
      );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu
    // Com isso, posso finalizar a transação usando a função 'commit'
    await tr.commit();

    return res.status(201).json({ message: 'Cadastro efetuado com sucesso' });
  } catch (err) {
    // Se entrou aqui no catch, é porque alguma operação falhou
    // Nesse caso, o sequelize reverterá as operações anteriores com a função rollback
    await tr.rollback(); 
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

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
    // formato Eager Loading (comentar/descomentar para usar!)
    // const employee = await Employee.findOne({
    //   where: { id },
    //   include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] }}],
    // });

    // formato Lazy Loading (comentar/descomentar para usar!)
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
