// Esse tipo de polimorfismo (ad-hoc ou por sobrecarga/overloading) não funciona no TS
// Mesmo ao compilar para JS, e fazer a chamada, ele chama apenas o segundo método
var PolymorphismOverloadingTest = /** @class */ (function () {
    function PolymorphismOverloadingTest() {
    }
    PolymorphismOverloadingTest.prototype.myMethod = function (num1) {
        return num1;
    };
    PolymorphismOverloadingTest.prototype.myMethod = function (num1, num2) {
        return num1 * num2;
    };
    return PolymorphismOverloadingTest;
}());
;
var obj1 = new PolymorphismOverloadingTest();
var obj2 = new PolymorphismOverloadingTest();
console.log(obj1.myMethod(6));
console.log(obj2.myMethod(6, 2));
