const jwt = require('jsonwebtoken');

const { User } = require('../../models');

/* Mesma chave privada que uso para criptografar o token. Agora, vou usá-la para descriptografá-lo.
Numa aplicação real, essa chave jamais ficaria hardcoded no código assim!
E muitos menos de forma duplicada, mas aqui o interesse é apenas ilustrativo */

const secretKey = 'secretultrasecretodotoken';

module.exports = async (req, res, next) => {
// Aquele token gerado anteriormente virá na requisição através do header Authorization
// em todas as rotas que quero que sejam autenticadas
  const token = req.headers['authorization'];

  // caso o token não seja informado, retorno o código status 401 - não autorizado
  if (!token) return res.status(401).json({ error: 'Token não encontrado ou não informado' });

  try {
    // Através do método 'verify', posso validar e decodificar o JWT
    const decoded = jwt.verify(token, secretKey);
    // A variável decoded será um objeto equivalente ao seguinte:
    /*
      {
        data: {
          id: 3
          username: 'mariojunior',
          password: '1234567'
        },
        iat: 15822587327,
        exp: 1584774714908
      }
    */
    // caso o token eteja expirado, a própria biblioteca retornará erro
    // por isso não é necessário fazer validação do tempo
    // caso esteja tudo certo, então busco o usuário na base para obter os dados atualizados

    const user = await User.findOne({ where: { username: decoded.data.username } });

    // Não existe usuário na base com o id informado no token?
    if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário do token' });

    // O usuário existe! Coloco ele em um campo no objeto req.
    // Dessa forma, o usuário estará disponível para outros middlewares que executem em sequência
    req.user = user;

    // Por fim, chamo o próximo middleware que, no caso, é a própria callback da rota
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  };
};
