// Exemplo ILUSTRATIVO de Composição

interface Board {
  save(): void;
  // ...
};

// Composição com classe Database: passando um objeto do tipo Database para o contrutor da classe.
class GenericBoard implements Board {
  constructor(public houses: string[], protected database: Database) {};

  public save() {
    this.database.save(this.houses);
  };
};

class ChessBoard extends GenericBoard {
  constructor(
    super();
    public houses: string[],
    protected database: Database,
    // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    // Implementação específica de um tabuleiro de xadrez
  }
};

interface Database {
  save(content: string[]): void;
  // ...
};

class MySQLDatabase implements Database {
  private connection: MySQLConnection; // Uma conexão fictícia ao BD
  // ...
  save(content: string[]) {
    // query fictícia para salvar o conteúdo no BD
    this.connection.query(`INSERT INTO table_name VALUES (${content})`);
  }
};

const db = new MySQLDatabase();
const board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();
