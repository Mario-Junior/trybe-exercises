// ./src/interfaces/IModel.ts

interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
}

export default IModel;
