function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
const dez2021DaysList = [28, 29, 30, '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dailyNumList = document.querySelector('#days');

for (let i = 0; i < dez2021DaysList.length; i += 1) {
  const numDays = dez2021DaysList[i];
  const numDaysList = document.createElement('li');
  numDaysList.innerText = numDays;
  dailyNumList.appendChild(numDaysList);
  if (numDays >= 1) { numDaysList.className = 'day' };
  if (dez2021DaysList[i] == 25) { numDaysList.className = 'day holiday' };
  if (dez2021DaysList[i] == 03 || dez2021DaysList[i] == 10 || dez2021DaysList[i] == 17) { numDaysList.className = 'day friday' };
  if (dez2021DaysList[i] == 24 || dez2021DaysList[i] == 31) { numDaysList.className = 'day holiday friday' };
}

// Exercício 2:
function createHolidaysButton(buttonName) {
  const button = document.createElement('button');
  const buttonDiv = document.querySelector('.buttons-container');
  
  button.id = 'btn-holiday';
  button.innerHTML = buttonName;
  buttonDiv.appendChild(button);
}
createHolidaysButton('Feriados');

// Exercício 3:
function colorHolidaysOnCLick() {
  const holidayButton = document.querySelector('#btn-holiday');
  const holidaysOnCLickColor = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const holidayColor = 'crimson';

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < holidaysOnCLickColor.length; i += 1) {
      if (holidaysOnCLickColor[i].style.backgroundColor === holidayColor) {
        holidaysOnCLickColor[i].style.backgroundColor = backgroundColor;
      } else {
        holidaysOnCLickColor[i].style.backgroundColor = holidayColor;
      }
    }
  });
}
colorHolidaysOnCLick();

// Exercício 4:
function createFridaysButton(buttonName) {
  const button = document.createElement('button');
  const buttonDiv = document.querySelector('.buttons-container');
  
  button.id = 'btn-friday';
  button.innerHTML = buttonName;
  buttonDiv.appendChild(button);
}
createFridaysButton('Sextas-feiras');

// Exercício 5:
function colorFridaysOnCLick() {
  const fridayButton = document.querySelector('#btn-friday');
  const fridaysOnCLickColor = document.querySelectorAll('.friday');
  const backgroundColor = 'rgb(238,238,238)';
  const fridayColor = 'yellow';

  fridayButton.addEventListener('click', function() {
    for (let i = 0; i < fridaysOnCLickColor.length; i += 1) {
      if (fridaysOnCLickColor[i].style.backgroundColor === fridayColor) {
        fridaysOnCLickColor[i].style.backgroundColor = backgroundColor;
      } else {
        fridaysOnCLickColor[i].style.backgroundColor = fridayColor;
      }
    }
  });
}
colorFridaysOnCLick();

// Exercício 6:
function zommIn() {
  let textDay = document.querySelector('#days');
  textDay.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '50px';
  });
}
zommIn()

function zoomOut() {
  let textDay = document.querySelector('#days');
  textDay.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
}
zoomOut()

