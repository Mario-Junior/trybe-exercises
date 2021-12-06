// Parte II - Object.keys
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property);
}

console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Método Object.keys usado para pegar as chaves e for/in para os valores
const listOfSkills = (student) => {
  const skillsArray = Object.keys(student);
  for (let index in skillsArray) {
    console.log(`${skillsArray[index]}, Nível: ${student[skillsArray[index]]}`);
  }
};

console.log('Estudante 1:');
listOfSkills(student1);

console.log('Estudante 2:');
listOfSkills(student2);
