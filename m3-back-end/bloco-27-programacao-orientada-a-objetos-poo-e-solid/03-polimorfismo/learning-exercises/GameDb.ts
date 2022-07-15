interface ICharacter {
  name: string;
  specialMoveName: string;
};

interface IDbCharacter extends ICharacter {
  id: number;
};

interface IModel {
  create: (Character: ICharacter) => Promise<IDbCharacter>;
  getAll: () => Promise<IDbCharacter[]>;
  getById: (id: number) => Promise<IDbCharacter>;
  update: (id: number, character: ICharacter) => Promise<IDbCharacter>;
  delete: (id: number) => Promise<boolean>;
};

const db: IDbCharacter[] = [];

class LocalDbModel implements IModel {
  create = async (character: ICharacter) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found!');
    return index;
  };

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
  
  update = async (id: number, character: ICharacter) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };
};

class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: ICharacter) {
    const newCharacter = await this.model.create(character);
    return ({ message: 'Character created', status: 201, data: newCharacter });
  };

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  };

  async getById(id: number) {
    const oneCharacter = await this.model.getById(id);
    return ({ status: 200, data: oneCharacter });
  };

  async update(id: number, character: ICharacter) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ message: 'Character updated', status: 204, data: updatedCharacter });
  };

  async delete(id: number){
    const deletedCharacter = await this.model.delete(id);
    return deletedCharacter;
  };
};

const mario = new CharacterService(new LocalDbModel());
mario.create({name: 'Mario', specialMoveName: 'Fireball'}).then(console.log);
const luigi = new CharacterService(new LocalDbModel());
luigi.create({name: 'Luigi', specialMoveName: 'SuperFlame'}).then(console.log);
luigi.update(2, {name: 'Luigi', specialMoveName: 'FireFly'}).then(console.log);
luigi.delete(4);
const charsList = new CharacterService(new LocalDbModel());
charsList.getAll().then(console.log);

class MockDbModel implements IModel {
  async create(character: ICharacter) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMoveName: 'Toad' };
  };

  async update(id: number, character: ICharacter) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMoveName: 'Egg Lay' };
  };

  async delete(id: number) {
    console.log('character deleted');
    return true;
  };

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMoveName: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMoveName: 'Inhale' },
    ];
  };

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMoveName: 'Fireball' };
  };
};

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
