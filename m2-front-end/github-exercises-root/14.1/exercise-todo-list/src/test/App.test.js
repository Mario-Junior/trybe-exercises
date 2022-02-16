import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
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
  test('Ao passar uma string na props ao componente Item, ela precisa aparecer na tela', () => {
    render(<Item content='Trybe :D' />);
    expect(screen.getByText('Trybe :D')).toBeInTheDocument();
  });
});

describe('Exercício 3 - Testando funcionalidade de apagar item selecionado', () => {
  test('Não deve haver botões de remover após a primeira renderização da página', () => {
    const { findAllByTestId } = render(<App />);
    const btnRemove = findAllByTestId('id-remove')[0];

    expect(btnRemove).toBe(undefined);
  });

  test('Testando a seleção de elemento', async () => {
    const { getByLabelText, getByText, findAllByText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    const [btnRemove] = await findAllByText('Remover');
    const selectTask = getByText('Exercitar');

    expect(selectTask).toBeInTheDocument();
    expect(btnRemove.disabled).toBe(true);
    userEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    userEvent.click(btnRemove);
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  })
});
