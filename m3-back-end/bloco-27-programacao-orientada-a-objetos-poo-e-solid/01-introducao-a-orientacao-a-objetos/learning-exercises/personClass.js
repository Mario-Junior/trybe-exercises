var Person = /** @class */ (function () {
    function Person(n, h, w) {
        console.log("Creating person ".concat(n));
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, ": zzzzzzz"));
    };
    return Person;
}());
var p1 = new Person('Adrielle', 166, 54);
var p2 = new Person('Mário Júnior', 178, 83);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
