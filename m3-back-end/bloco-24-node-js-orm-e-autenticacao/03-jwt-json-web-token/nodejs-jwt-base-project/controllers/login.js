const { User } = require('../models');
const jwt = require('jsonwebtoken'); // requisição do jwt após instalação

// Chave secreta. É com ela que os dados do usuário serão encriptados
// Em projetos reais, armazena-se em variável de ambiente e tem-se muito cuidado!
// Pois só quem tem acesso a ela poderá criar ou alterar tokens JWT
const secretKey = 'secretultrasecretodotoken';

const validateBody = (body, res) => {
  const { username, password } = body;

  if (!username || !password) {
    res
      .status(401)
      .json({ message: 'É necessário usuário e senha para fazer login' });
    return false;
  }

  return true;
};

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { username } });
  
    if (!user || user.password !== password)
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    /* Crio uma config básica para o JWT, onde:
      expiresIn -> significa o tempo pelo qual esse token será válido;
      algorithm -> algoritmo que uso para assinar a mensagem (HMAC-SHA256 falado no começo) */

    /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    /* Aqui é quando assino de fato a mensagem com a "chave secreta".
      Mensagem essa que contém dados do meu usuário e/ou demais dados que quiser colocar dentro de "data".
      O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6Iml0YWxzc29kaiIsInBhc3N3b3JkIjoic2VuaGExMjMifSwiaWF0IjoxNjM4OTc1MTMyLCJleHAiOjE2Mzk1Nzk5MzJ9.hnpmu2p61Il8wdQfmUiJ7wiWXgw8UuioOU_D2RnB9kY */
    const token = jwt.sign({ data: user }, secretKey, jwtConfig);

    /* Por fim, devolvo essa informação ao usuário. */
    res.status(200).json({ token });
    
  // return res.status(200).json({ message: 'Login efetuado com sucesso' });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};
