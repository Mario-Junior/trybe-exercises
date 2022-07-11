// palavra reservada class, seguida do 'NomeDaClasse' e um {...} (par de chaves)
class Person {
  // criação de atributos => 'nomeAtributo: tipo;'
  name: string;
  height: number;
  weight: number;

  // criação de métodos => 'nomeDoMetodo() {...}'
  // ATENÇÃO ao método construtor
  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  // criação de métodos => 'nomeDoMetodo() {...}'
  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

// criação de objetos (neste caso de uma mesma classe), via chamada do método constructor, com a palavra reservada 'new'
const p1 = new Person('Adrielle', 166, 54);
const p2 = new Person('Mário Júnior', 178, 83);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
