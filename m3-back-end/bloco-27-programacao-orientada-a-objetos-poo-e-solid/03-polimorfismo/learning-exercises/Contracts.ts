// Sintaxe com interfaces e generics
interface Person {
  id: number;
  name: string;
  showIdentification(): void;
};

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification(): void { console.log(this.id, this._cpf); }
};

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
};

const pp0 = new PhysicalPerson('John', '123.456.789-00');
const pp1 = new PhysicalPerson('Jenny', '987.654.321-00');
const lp = new LegalPerson('International Sales SA', '00.000.000/0001-00');

const showIdentification = (person: Person) => {
  person.showIdentification();
};

showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
