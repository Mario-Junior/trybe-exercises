// Classe pai ou superclasse
class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */

  constructor(public name: string, private birthDate: Date) {}

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);  
  }
};

// Classe filha ou subclasse (atenção ao uso do extends)
class Mammal extends Animal {
  // Método 'walk' restrito da classe filha
  walk() {
    console.log(`${this.name} está andando!`);
  }
};

// instanciação da classe filha (criação de um Objeto!)
const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020'))
);


// função main espera receber um parâmetro do tipo Animal.
const main = (animal: Animal) => {
  console.log(animal.age); 
};

// O objeto passado para a função é o objeto tiger, que é do tipo Mammal. Isso ocorre pois todo Mammal é também um Animal, então qualquer parâmetro do tipo Animal pode receber um objeto de classes filhas. Essa é a grande vantagem do polimorfismo por subtipagem (ou herança).
main(tiger);
tiger.walk();

// A função main, porém, só entende um objeto do tipo Animal. Por isso ela não consegue acessar nada restrito ao subtipo Mammal (também conhecida como classe filha ou subclasse)! Assim, obtenho um erro que diz "a propriedade 'walk' não existe no tipo Animal".
const main2 = (animal: Animal) => {
  console.log(animal.age);
  animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
}
main2(tiger);

// Nova classe filha de Animal, agora com outro método específico 'fly'
class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();
