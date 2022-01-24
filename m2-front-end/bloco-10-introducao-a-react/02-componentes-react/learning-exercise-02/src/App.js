//* Composição de componentes *//
// Parte 01 = Código extenso, com estruturas semelhantes, imagine se fossem 10 álbuns, ou 20...
// import React from 'react';

// class App extends React.Component {
//   render() {
//     // Declaração do objeto contendo informações do album01
//     const album01 = {
//       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     // Declaração do objeto contendo informações do album02
//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     // Retorno do que será renderizado
//     return (
//       <article>
//         <section>
//           <img src={ album01.image } alt={ album01.title } />
//           <h2>{ album01.title }</h2>
//           <p>Lançamento: { album01.releaseDate.year }</p>
//           <p>Gravadora: { album01.others.recordCompany }</p>
//           <p>Formatos: { album01.others.formats }</p>
//         </section>
//         <section>
//           <img src={ album02.image } alt={ album02.title } />
//           <h2>{ album02.title }</h2>
//           <p>Lançamento: { album02.releaseDate.year }</p>
//           <p>Gravadora: { album02.others.recordCompany }</p>
//           <p>Formatos: { album02.others.formats }</p>
//         </section>
//       </article>
//     );
//   }
// }

// export default App;

// Refatorando para parte 2
// src/App.js
import React from 'react';
// import Album from './components/Album'
import Album from './Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;
