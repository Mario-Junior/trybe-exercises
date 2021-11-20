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
function createHolidaysButton() {
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.appendChild(document.createTextNode('Feriados'));
  button.id = 'btn-holiday';
  const buttonDiv = document.querySelector('.buttons-container');
  buttonDiv.appendChild(button);
}
createHolidaysButton();

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