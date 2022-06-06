const express = require('express');
const { User } = require('../models');
const router = express.Router();

// endpoint usa o método findAll do Sequelize para retornar todos os users
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  };
});

// endpoint usa o método findByPk do Sequelize para buscar usuário pelo id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    return res.status(200).json(user);
  } catch (err) {
    console.log((err.message));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e pelo email (como URL query)
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    return res.status(200).json(user);
  } catch (err) {
    console.log((err.message));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// endpoint usa o método create do Sequelize para salvar um usuário no banco
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone_num } = req.body;
    const newUser = await User.create({ fullName, email, phone_num });

    return res.status(201).json(newUser);
  } catch (err) {
    console.log((err.message));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// endpoint usa o método update do Sequelize para alterar um usuário no banco
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone_num } = req.body;

    const [updateUser] = await User.update(
      { fullName, email, phone_num },
      { where: { id } },
    );

    console.log(updateUser); // para conferir o que é retornado quando o user com o id é ou não encontrado;

    if (!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (err) {
    console.log((err.message));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// endpoint usa o método destroy do Sequelize para remover um usuário no banco
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser); // para conferir o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (err) {
    console.log((err.message));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

module.exports = router;
