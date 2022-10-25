import { Todo, Todos } from '../';
import { render, cleanup } from '@testing-library/react';
import { TodoContext } from '../../../context/todoContext';
import { ITodo } from '../../../@types/todo';
import { TodoState } from '../Todos';

afterEach(cleanup);

const mockProps = {
  todo: {
    id: 1,
    title: 'test title',
    description: 'test description',
    status: false,
    priority: 1
  } as ITodo
};

const defaultProps = {
  todos: [mockProps.todo],
  saveTodo: jest.fn(),
  completeTodo: jest.fn(),
  editTodo: jest.fn(),
  sortTodos: jest.fn(),
  removeTodo: jest.fn(),
  loading: false
};

test('Loading State Displays Correctly', () => {
  const wrapper = (
    <TodoContext.Provider value={{ ...defaultProps, loading: true }}>
      <Todos />
    </TodoContext.Provider>
  );
  const { queryByText } = render(wrapper);
  expect(queryByText('Loading...')).toBeTruthy();
});

test('Todo displays correct data', () => {
  const wrapper = (
    <TodoContext.Provider value={{ ...defaultProps }}>
      <Todo {...mockProps} />
    </TodoContext.Provider>
  );
  const { queryByText } = render(wrapper);
  expect(queryByText('test title')).toBeTruthy();
  expect(queryByText('test description')).toBeTruthy();
});

test('Zero state displays with empty todo context', () => {
  const wrapper = (
    <TodoContext.Provider value={{ ...defaultProps, todos: [] }}>
      <TodoState />
    </TodoContext.Provider>
  );
  const {findByRole} = render(wrapper);
  expect(findByRole('info')).toBeDefined();
});
