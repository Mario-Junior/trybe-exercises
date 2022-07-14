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
class LocalDBModel {
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
