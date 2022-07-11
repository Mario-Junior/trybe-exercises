var PersonEncapsulated = /** @class */ (function () {
    function PersonEncapsulated(name, age, weight, height) {
        this.name = name;
        this._age = age;
        this._weight = weight;
        this.height = height;
    }
    PersonEncapsulated.prototype.getWeight = function () {
        return this._weight;
    };
    Object.defineProperty(PersonEncapsulated.prototype, "age", {
        // getter = esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
        get: function () {
            return this._age;
        },
        // setter = do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
        set: function (newValue) {
            if (newValue >= 0 && newValue < 200) {
                this._age = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    PersonEncapsulated.prototype.birthday = function () {
        this._age += 1;
    };
    return PersonEncapsulated;
}());
var person1 = new PersonEncapsulated('Maria', 68, 51, 165);
var person2 = new PersonEncapsulated('Mario', 65, 75, 175);
// Alteração direta de variável pública
person1.name = 'Mariah';
// Acesso direto a variável pública
console.log(person1.name);
// Acesso a método público que manipula atributo privado
console.log(person1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(person2.age);
// Acesso a método público que manipula atributo privado
person2.birthday();
console.log(person2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
person2.age = 17;
console.log(person2.age);
// Leitura de atributo readonly
console.log(person1.height);
// Observação da validação de dados no set age. É para este tipo de coisa que uso atributos privados: validar alterações nos dados. Ex:
person2.age = 300;
console.log(person2.age);
