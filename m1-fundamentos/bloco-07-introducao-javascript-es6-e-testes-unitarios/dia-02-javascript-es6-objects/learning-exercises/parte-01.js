const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
console.log(customer);

const customerPropAdd = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};
console.log(customerPropAdd);

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

const client = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
client[newKey] = lastName;
newKey = 'fullName';
const fullName = `${client.firstName} ${client.lastName}`;
client[newKey] = fullName;
console.log(client);
