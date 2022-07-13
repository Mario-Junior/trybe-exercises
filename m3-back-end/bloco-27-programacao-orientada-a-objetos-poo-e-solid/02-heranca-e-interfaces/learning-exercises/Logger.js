;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (strings) {
        console.log("Na classe 1: ".concat(strings));
    };
    return ConsoleLogger;
}());
;
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (strings) {
        console.log("Na classe 2: ".concat(strings));
    };
    return ConsoleLogger2;
}());
;
;
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(dbLog) {
        if (dbLog === void 0) { dbLog = new ConsoleLogger(); }
        this.dbLog = dbLog;
    }
    ;
    ExampleDatabase.prototype.save = function (key, value) {
        this.dbLog.log("Salvando o valor ".concat(value, " na chave ").concat(key));
    };
    return ExampleDatabase;
}());
;
// Criar objeto de cada um dos 'Loggers'
var logger1 = new ConsoleLogger();
var logger2 = new ConsoleLogger2();
// Criar três objetos de 'ExampleDatabase', cada um dos dois primeiros recebendo um dos 'Loggers' e o último não recebendo nenhum
var database1 = new ExampleDatabase(logger1);
var database2 = new ExampleDatabase(logger2);
var database3 = new ExampleDatabase();
// Utilizar todos para salvar conteúdo fictício
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
