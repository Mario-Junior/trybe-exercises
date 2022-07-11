var Tv = /** @class */ (function () {
    function Tv(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    Tv.prototype.turnOn = function () {
        console.log("\n      TV ".concat(this.brand, " - ").concat(this.size, "\"\n      Resolution: ").concat(this.resolution, "\n      Connections: ").concat(this.connections));
    };
    return Tv;
}());
;
var tv1 = new Tv('LG', 65, '8K', ['HDMI', 'Ethernet', 'Game controller', 'Wi-Fi']);
tv1.turnOn();
