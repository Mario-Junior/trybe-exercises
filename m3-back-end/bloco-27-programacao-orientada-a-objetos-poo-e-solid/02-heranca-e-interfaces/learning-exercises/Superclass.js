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
var Superclass = /** @class */ (function () {
    function Superclass() {
        this.isSuper = true;
    }
    Superclass.prototype.sayHello = function () {
        console.log("Ol\u00E1 mundo!");
    };
    return Superclass;
}());
;
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        var _this = _super.call(this) || this;
        _this.isSuper = false;
        return _this;
    }
    return Subclass;
}(Superclass));
var myFunc = function (object) {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
};
var newSuper = new Superclass();
var newSub = new Subclass();
myFunc(newSuper);
myFunc(newSub);
