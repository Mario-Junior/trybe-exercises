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
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
};

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range!`);
  }

  specialMove(): void {
    console.log(this._specialMove);
  }
};

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack from a long range!`);
  }

  specialMove(): void {
    console.log(this._specialMove);
  }
};

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove(); 
};

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);
