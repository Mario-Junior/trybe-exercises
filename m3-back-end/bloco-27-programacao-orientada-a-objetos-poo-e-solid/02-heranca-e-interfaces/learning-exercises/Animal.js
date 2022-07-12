var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe pai ou superclasse
var Animal = /** @class */ (function () {
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
    function Animal(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            /*Para operar com datas, vamos operar somente com milissegundos. Uma data
            é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
            Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
;
// Classe filha ou subclasse (atenção ao uso do extends)
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Método 'walk' restrito da classe filha
    Mammal.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando!"));
    };
    return Mammal;
}(Animal));
;
// instanciação da classe filha (criação de um Objeto!)
var tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
// função main espera receber um parâmetro do tipo Animal.
var main = function (animal) {
    console.log(animal.age);
};
// O objeto passado para a função é o objeto tiger, que é do tipo Mammal. Isso ocorre pois todo Mammal é também um Animal, então qualquer parâmetro do tipo Animal pode receber um objeto de classes filhas. Essa é a grande vantagem do polimorfismo por subtipagem (ou herança).
main(tiger);
tiger.walk();
// A função main, porém, só entende um objeto do tipo Animal. Por isso ela não consegue acessar nada restrito ao subtipo Mammal (também conhecida como classe filha ou subclasse)! Assim, obtenho um erro que diz "a propriedade 'walk' não existe no tipo Animal".
var main2 = function (animal) {
    console.log(animal.age);
    animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
};
main2(tiger);
// Nova classe filha de Animal, agora com outro método específico 'fly'
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " est\u00E1 voando!"));
    };
    return Bird;
}(Animal));
var parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
