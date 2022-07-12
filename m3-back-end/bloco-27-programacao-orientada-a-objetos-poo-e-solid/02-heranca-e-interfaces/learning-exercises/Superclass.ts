class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello(): void {
    console.log(`Olá mundo!`);
  }
};

class Subclass extends Superclass {}

const myFunc = (instanceClass: Superclass) => {
  instanceClass.sayHello();
};

const newSuper = new Superclass();

const newSub = new Subclass();

myFunc(newSuper);
myFunc(newSub);
