import { Schema, model } from 'mongoose';

interface IBook {
  title: string,
  author: string,
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
});

// Para acessar os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementar a API, crio um model

const bookModel = model<IBook>('Book', bookSchema);
