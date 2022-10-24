import * as React from 'react';
import { TodoContextType, ITodo } from '../../@types/todo';
import { TodoContext } from '../../context/todoContext';
import { ZeroStateSvg } from '../Assets/ZeroState';
import { Select, Spinner } from '../UI';
import { SORT_BY_OPTIONS, THEME } from '../../config';
import Todo from './ToDo';

const Todos = () => {
  const { loading } = React.useContext(TodoContext) as TodoContextType;
  return loading ? <Spinner /> : <TodoState />;
};

export default Todos;

export const TodoState = () => {
  const { todos, sortTodos } = React.useContext(TodoContext) as TodoContextType;

  return todos.length > 0 ? (
    <div
      style={{
        marginTop: '5rem',
        textAlign: 'center'
      }}
    >
      <h1>Stuff To Do </h1>
      <Select
        id={'sort-todos'}
        options={SORT_BY_OPTIONS}
        name={'sort-todos'}
        onChange={(e: any) => sortTodos(e.target.value)}
      />
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  ) : (
    <>
      <h1>No To-Dos... Let&apos;s Add One! </h1>
      <ZeroStateSvg height={'yes'} width={'yes'} fill={THEME.colors.brand[500]} />
    </>
  );
};
