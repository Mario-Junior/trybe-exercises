var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
const db = [];
class LocalDbModel {
    constructor() {
        this.create = (character) => __awaiter(this, void 0, void 0, function* () {
            const lastId = db.length > 0 ? db[db.length - 1].id : 0;
            const newCharacter = Object.assign({ id: lastId + 1 }, character);
            db.push(newCharacter);
            return newCharacter;
        });
        this.findIndexById = (id) => {
            const index = db.findIndex((character) => character.id === id);
            if (index < 0)
                throw new Error('Character not found!');
            return index;
        };
        this.getAll = () => __awaiter(this, void 0, void 0, function* () { return db; });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexToGet = this.findIndexById(id);
            return db[indexToGet];
        });
        this.update = (id, character) => __awaiter(this, void 0, void 0, function* () {
            const indexToUpdate = this.findIndexById(id);
            db[indexToUpdate] = Object.assign(Object.assign({}, db[indexToUpdate]), character);
            return db[indexToUpdate];
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexToDelete = this.findIndexById(id);
            const deletedItem = db.splice(indexToDelete, 1);
            if (deletedItem.length > 0)
                return true;
            return false;
        });
    }
}
;
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield this.model.create(character);
            return ({ message: 'Character created', status: 201, data: newCharacter });
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacter = yield this.model.getAll();
            return ({ status: 200, data: allCharacter });
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const oneCharacter = yield this.model.getById(id);
            return ({ status: 200, data: oneCharacter });
        });
    }
    ;
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCharacter = yield this.model.update(id, character);
            return ({ message: 'Character updated', status: 204, data: updatedCharacter });
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCharacter = yield this.model.delete(id);
            return deletedCharacter;
        });
    }
    ;
}
;
const mario = new CharacterService(new LocalDbModel());
mario.create({ name: 'Mario', specialMoveName: 'Fireball' }).then(console.log);
const luigi = new CharacterService(new LocalDbModel());
luigi.create({ name: 'Luigi', specialMoveName: 'SuperFlame' }).then(console.log);
luigi.update(2, { name: 'Luigi', specialMoveName: 'FireFly' }).then(console.log);
luigi.delete(4);
const charsList = new CharacterService(new LocalDbModel());
charsList.getAll().then(console.log);
class MockDbModel {
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character created');
            return { id: 1, name: 'Peach', specialMoveName: 'Toad' };
        });
    }
    ;
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character updated');
            return { id: 1, name: 'Yoshi', specialMoveName: 'Egg Lay' };
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character deleted');
            return true;
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                { id: 1, name: 'Samus', specialMoveName: 'Charge Shot' },
                { id: 2, name: 'Kirby', specialMoveName: 'Inhale' },
            ];
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'Mario', specialMoveName: 'Fireball' };
        });
    }
    ;
}
;
const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);
const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
