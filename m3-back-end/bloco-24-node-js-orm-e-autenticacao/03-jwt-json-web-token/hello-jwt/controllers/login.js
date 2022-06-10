require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

const validateBody = (body) =>
  // utilizo o Joi pra validar o schema do body
  // uso o método messages() pra customizar as mensagens de erro das validações
  Joi.object({
    username: Joi.string().min(5).alphanum().required().messages({
      'string.min': '"username" precisa no mínimo 5 caracteres',
      'string.required': '"username" é obrigatório',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" precisa no mínimo 5 caracteres',
      'string.required': '"password" é obrigatório',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return next(error);

  const payload = {
    username: req.body.username,
    admin: false,
  };
  
  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256'};

  const token = jwt.sign(payload, JWT_KEY, jwtConfig);

  return res.status(200).json({ token });
  // try {
  //   const regex = /^(\d{0,5})([A-Z]{0,5})/;
  //   const { username, password } = req.body;
  //   console.log(username, password);

  //   const jwtConfig = { expiresIn: '1h', algorithm: 'HS256'};
  //   const token = jwt.sign({ data: username }, secretKey, jwtConfig);

  //   if (typeof username === 'string'
  //   && regex.test(username)
  //   && username.length >= 5
  //   && typeof password === 'string'
  //   && password.length >= 5)
    
  //   return res.status(200).json({ token });
  // } catch (err) {
  //   return res.status(500).json({ message: 'Erro interno', error: err.message });
  // };
};
