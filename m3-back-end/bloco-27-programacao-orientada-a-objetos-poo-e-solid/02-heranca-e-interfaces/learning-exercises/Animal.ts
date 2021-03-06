// Classe pai ou superclasse
// Selecionar e Descomentar de linha 3 até 90 para ver os exercícios anteriores
// class Animal {
//   /*
//     Ao invés de declarar os atributos antes do construtor, receber parâmetros
//     no construtor e colocá-los nos atributos da classe, se não formos
//     validar, podemos utilizar uma forma simplificada de escrita, simplesmente
//     colocando o modificador de visibilidade na frente
//     do nome do parâmetro no construtor

//     Exemplo
//     O seguinte código:

//     public x: number
//     constructor(x: number) { this.x = x }

//     Pode ser substituído por:

//     constructor(public x: number) { }
    
//     Obs: Usando essa sintaxe é necessário indicar explicitamente 
//     logo antes do nome do atributo se ele é public, private, protected ou readonly
//   */

//   constructor(public name: string, private birthDate: Date) {}

//   get age() {
//     /*Para operar com datas, vamos operar somente com milissegundos. Uma data
//     é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
//     const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

//     /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
//     Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);  
//   }
// };

// // Classe filha ou subclasse (atenção ao uso do extends)
// class Mammal extends Animal {
//   // Método 'walk' restrito da classe filha
//   walk() {
//     console.log(`${this.name} está andando!`);
//   }
// };

// // instanciação da classe filha (criação de um Objeto!)
// const tiger = new Mammal(
//   'Tigre',
//   new Date(Date.parse('May 03, 2020'))
// );


// // função main espera receber um parâmetro do tipo Animal.
// const main = (animal: Animal) => {
//   console.log(animal.age); 
// };

// // O objeto passado para a função é o objeto tiger, que é do tipo Mammal. Isso ocorre pois todo Mammal é também um Animal, então qualquer parâmetro do tipo Animal pode receber um objeto de classes filhas. Essa é a grande vantagem do polimorfismo por subtipagem (ou herança).
// main(tiger);
// tiger.walk();

// // A função main, porém, só entende um objeto do tipo Animal. Por isso ela não consegue acessar nada restrito ao subtipo Mammal (também conhecida como classe filha ou subclasse)! Assim, obtenho um erro que diz "a propriedade 'walk' não existe no tipo Animal".
// /* Descomentar para ver o erro!
// const main2 = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }
// main2(tiger);
// */

// // Nova classe filha de Animal, agora com outro método específico 'fly'
// class Bird extends Animal {
//   fly() {
//     console.log(`${this.name} está voando!`);
//   }
//   /* Descomentar para ver o erro!
//   showBirthDate() {
//     // tenho, na classe Animal, um atributo privado birthDate (data de nascimento). Não posso acessar ou alterar este atributo fora da classe Animal, pois ele é privado.
//     console.log(this.birthDate); // ERRO! birthDate is private and only accessible within class 'Animal'.
//   }
//   */
// }

// const parrot = new Bird(
//   'Papagaio',
//   new Date(Date.parse('Jun 07, 2017')),
// );

// console.log(parrot.age);
// parrot.fly();

class Car {
  constructor(protected launchDate: Date) {}
};
// Exemplo de acesso a atributo/método protegido (protected) fora da classe na subclasse
class Beatle extends Car{
  showLaunchDate() {
    console.log(this.launchDate);
  }
};

// Exemplo de classe com implementação (implements) de contrato de interface
interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
};

class Bird implements Animal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    let timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate(): Date { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
};

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(`A idade do papagaio é: ${parrot.age} ano(s)`);
parrot.fly();
