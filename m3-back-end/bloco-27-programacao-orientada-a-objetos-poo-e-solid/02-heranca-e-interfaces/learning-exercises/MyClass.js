;
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    ;
    MyClass.prototype.myFunc = function (myParam) {
        return "myNumber + myParam: ".concat(this.myNumber + myParam);
    };
    return MyClass;
}());
;
var object = new MyClass(6);
console.log("myNumber is: ".concat(object.myNumber));
console.log(object.myFunc(6));
