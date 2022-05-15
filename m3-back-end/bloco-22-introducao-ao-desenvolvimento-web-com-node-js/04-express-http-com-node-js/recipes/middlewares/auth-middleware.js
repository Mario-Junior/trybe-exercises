const validUser = {
  username: 'Masterchef',
  password: 'SenhaSuperSeguraSQN'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: `Username or password can't be blank!` });
  }

  if (username !== validUser.username || !password !== validUser.password) {
    return res.status(401).json({ message: 'Você não é o Masterchef!' });
  }

  next()
};

module.exports = authMiddleware;
