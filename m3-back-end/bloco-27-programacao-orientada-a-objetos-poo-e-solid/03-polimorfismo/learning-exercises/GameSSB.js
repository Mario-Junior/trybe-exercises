/* Minha solução... Descomentar para ver!
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
};

class MeleeCharacter extends Character {
  talk() {
    console.log(`Uga mugaaa!`);
  };
  specialMove(): void {
    console.log(`*SHOOORIUKEN*`);
  };
};

class LongRangeCharacter extends Character {
  talk() {
    console.log(`Titans, GO!`);
  };
  specialMove(): void {
    console.log(`#HADOOOUKEN#`);
  };
};

const theChar = (character: Character) => {
  character.talk();
  character.specialMove();
};

const meleeChar = new MeleeCharacter();
const longChar = new LongRangeCharacter();

theChar(meleeChar);
theChar(longChar);
*/
// Solução do Gabarito:
class Character {
}
;
class MeleeCharacter extends Character {
    constructor(_name, _specialMove) {
        super();
        this._name = _name;
        this._specialMove = _specialMove;
    }
    talk() {
        console.log(`Hi, I'm ${this._name}. I attack at close range!`);
    }
    specialMove() {
        console.log(this._specialMove);
    }
}
;
class LongRangeCharacter extends Character {
    constructor(_name, _specialMove) {
        super();
        this._name = _name;
        this._specialMove = _specialMove;
    }
    talk() {
        console.log(`Hi, I'm ${this._name}. I attack from a long range!`);
    }
    specialMove() {
        console.log(this._specialMove);
    }
}
;
function characterPresentation(character) {
    character.talk();
    character.specialMove();
}
;
const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');
characterPresentation(yoshi);
characterPresentation(samus);
