class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello(): void {
    console.log(`Olá mundo!`);
  }
};

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const newSuper = new Superclass();

const newSub = new Subclass();

myFunc(newSuper);
myFunc(newSub);
