interface Logger {
  log(strings: string): void;
};

class ConsoleLogger implements Logger {
  log(strings: string): void {
    console.log(`Na classe 1: ${strings}`);
  }
};

class ConsoleLogger2 implements Logger {
  log(strings: string): void {
    console.log(`Na classe 2: ${strings}`);
  }
};

interface Db {
  dbLog: Logger;

  save(key: string, value: string): void;
};

class ExampleDatabase implements Db {
  constructor(public dbLog: Logger = new ConsoleLogger()) {};

  save(key: string, value: string): void {
    this.dbLog.log(`Salvando o valor ${value} na chave ${key}`);
  }
};

// Criar objeto de cada um dos 'Loggers'
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Criar três objetos de 'ExampleDatabase', cada um dos dois primeiros recebendo um dos 'Loggers' e o último não recebendo nenhum
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilizar todos para salvar conteúdo fictício
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
