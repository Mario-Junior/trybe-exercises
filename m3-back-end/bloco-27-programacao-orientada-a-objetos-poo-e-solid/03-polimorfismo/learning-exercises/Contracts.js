;
class PhysicalPerson {
    constructor(name, cpf) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
}
PhysicalPerson.lastId = 0;
;
class LegalPerson {
    constructor(name, cnpj) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() { console.log(this.id, this._cnpj); }
}
LegalPerson.lastId = 0;
;
const pp0 = new PhysicalPerson('John', '123.456.789-00');
const pp1 = new PhysicalPerson('Jenny', '987.654.321-00');
const lp = new LegalPerson('International Sales SA', '00.000.000/0001-00');
const showIdentification = (person) => {
    person.showIdentification();
};
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
