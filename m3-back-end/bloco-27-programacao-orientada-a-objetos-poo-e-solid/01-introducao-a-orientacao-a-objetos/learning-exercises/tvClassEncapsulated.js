var TvEncapsulated = /** @class */ (function () {
    function TvEncapsulated(b, s, r, c) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    TvEncapsulated.prototype.turnOn = function () {
        console.log("\n      TV ".concat(this._brand, " - ").concat(this._size, "\"\n      Resolution: ").concat(this._resolution, "\n      Connections: ").concat(this._connections));
    };
    Object.defineProperty(TvEncapsulated.prototype, "connected", {
        get: function () {
            return this._connectedTo;
        },
        set: function (connection) {
            if (this._connections.includes(connection)) {
                this._connectedTo = connection;
                console.log(this._connectedTo);
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return TvEncapsulated;
}());
;
var tv2 = new TvEncapsulated('LG', 65, '8K', ['HDMI', 'Ethernet', 'Game controller', 'Wi-Fi']);
tv2.turnOn();
// teste: conexão existente possível
tv2.connected = 'HDMI';
console.log('Connected to: ', tv2.connected);
// teste: conexão inexistente
tv2.connected = 'ChromeCast';
console.log('Connected to: ', tv2.connected);
