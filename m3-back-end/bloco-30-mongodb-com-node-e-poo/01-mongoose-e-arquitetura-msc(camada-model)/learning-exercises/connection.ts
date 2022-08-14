import { connect } from 'mongoose';

connect('mongodb://localhost:27017/mongodb');

// DESCOMENTAR para entendimento!
// Exemplo com URI:
// connect('mongodb://username:password@host:port/nomeDaMinhaBaseDeDados');

// Exemplos com options:
// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' });
// OU
// const options = {
//   user: 'user', // Usuário do banco de dados.
//   pass: 'password' // senha do usuário do banco de dados.
//   autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
// };
// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', options);
