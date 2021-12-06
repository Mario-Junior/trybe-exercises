const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const orderName = order.name;
  const orderPhone = order.phoneNumber;
  const orderAddress = `${order.address.street} Nº: ${order.address.number}, Comp.: apto ${order.address.apartment}`;

  console.log(`Olá ${deliveryPerson}; entrega para: ${orderName}; Telefone: ${orderPhone}; Endereço: ${orderAddress}.`);
}
customerInfo(order);

const orderModifier = (order) => {
  const newOrder = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newOrder}; o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
}
orderModifier(order);
