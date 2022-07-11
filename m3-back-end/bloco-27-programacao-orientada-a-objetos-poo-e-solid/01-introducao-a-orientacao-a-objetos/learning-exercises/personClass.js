// palavra reservada class, seguida do 'NomeDaClasse' e um {...} (par de chaves)
var Person = /** @class */ (function () {
    // criação de métodos => 'nomeDoMetodo() {...}'
    // ATENÇÃO ao método construtor
    function Person(n, h, w) {
        console.log("Creating person ".concat(n));
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    // criação de métodos => 'nomeDoMetodo() {...}'
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, ": zzzzzzz"));
    };
    return Person;
}());
// criação de objetos (neste caso de uma mesma classe), via chamada do método constructor, com a palavra reservada 'new'
var p1 = new Person('Adrielle', 166, 54);
var p2 = new Person('Mário Júnior', 178, 83);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
