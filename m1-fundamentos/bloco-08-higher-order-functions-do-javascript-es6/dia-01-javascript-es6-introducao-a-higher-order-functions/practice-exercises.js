// Prática
// 1 - Criar função que retorne um objeto { nomeCompleto, email }. Passar a função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A função deve receber como parâmetro o nome completo da pessoa e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com

const newEmployees = (employeeObj) => {
  const employees = {
    id1: employeeObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeObj = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { nomeCompleto: fullname, email: `${email}@trybe.com` };
};

console.log(newEmployees(employeeObj));
