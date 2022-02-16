import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercício 1 - Testa o Botão de Adicionar e sua funcionalidade', () => {
  test('Se o botão está na tela', () => {
    render(<App />);
    const addButton = screen.getByRole('button');
    expect(addButton).toBeInTheDocument();
  });
  test('Se o botão contém o texto Adicionar', () => {
    render(<App />);
    const addButton = screen.getByText('Adicionar');
    expect(addButton).toBeInTheDocument();
  });
  test('Se ao botão ser clicado, a tarefa digitada pelo usuário é salva', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const task = 'Estudar com a TRYBE'
    const addButton = screen.getByText('Adicionar');
    userEvent.type(inputTask, task);
    expect(screen.queryByText(task)).not.toBeInTheDocument();
    userEvent.click(addButton);
    expect(screen.queryByText(task)).toBeInTheDocument();
  });
});

describe('Exercício 2 - Testa a aplicação e adição de uma lista de tarefas', () => {
  test('Simulação da adição de várias tarefas', () => {
    const toDoList = ['Preparação prévia', 'Day trade', 'Almoçar', 'Trybe :D']

    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByText('Adicionar');

    toDoList.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(addButton);
    });

    toDoList.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('', () => {
  test('', () => {

  });  
});
