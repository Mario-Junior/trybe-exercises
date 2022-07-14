// Esse tipo de polimorfismo (ad-hoc ou por sobrecarga/overloading) não funciona no TS
// Mesmo ao compilar para JS, e fazer a chamada, ele chama apenas o segundo método

class PolymorphismOverloadingTest {
  myMethod(num1: number): number {
    return num1;
  }

  myMethod(num1: number, num2: number): number {
    return num1 * num2;
  }
};

const obj1 = new PolymorphismOverloadingTest();
const obj2 = new PolymorphismOverloadingTest();

console.log(obj1.myMethod(6));
console.log(obj2.myMethod(6, 2));
