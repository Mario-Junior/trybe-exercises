// Exemplo ILUSTRATIVO de Composição
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
;
// Composição com classe Database: passando um objeto do tipo Database para o contrutor da classe.
var GenericBoard = /** @class */ (function () {
    function GenericBoard(houses, database) {
        this.houses = houses;
        this.database = database;
    }
    ;
    GenericBoard.prototype.save = function () {
        this.database.save(this.houses);
    };
    ;
    return GenericBoard;
}());
;
var ChessBoard = /** @class */ (function (_super) {
    __extends(ChessBoard, _super);
    function ChessBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChessBoard;
}(GenericBoard));
{
    // Implementação específica de um tabuleiro de xadrez
}
;
;
var MySQLDatabase = /** @class */ (function () {
    function MySQLDatabase() {
    }
    // ...
    MySQLDatabase.prototype.save = function (content) {
        // query fictícia para salvar o conteúdo no BD
        this.connection.query("INSERT INTO table_name VALUES (".concat(content, ")"));
    };
    return MySQLDatabase;
}());
;
var db = new MySQLDatabase();
var board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();
