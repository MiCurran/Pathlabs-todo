import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 4,
      title: 'Demo To Do',
      description: 'this is an example of a description for your todo. Click here to edit!',
      status: false,
      priority: 1
    }
  ]);

  const sortTodos = (type: 'priority' | 'id') => {
    const sorted = [...todos].sort((a, b) => b[type] - a[type]);
    setTodos(sorted);
  };

  const saveTodo = (todo: ITodo) => {
    setLoading(true);
    const newTodo: ITodo = {
      id: Math.random(), // <--- not really unique - but hopefully fine for our example -- could use lib like uuid
      title: todo.title,
      description: todo.description,
      status: false,
      priority: todo.priority
    };
    // mock some async logic
    setTimeout(() => {
      setTodos([...todos, newTodo]);
      setLoading(false);
    }, 1_500);
    return todos;
  };

  const completeTodo = (id: number) => {
    let didComplete = false;
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
        setTodos([...todos]);
        didComplete = true;
      }
      return didComplete;
    });
  };

  const removeTodo = (id: number) => {
    setLoading(true);
    const index = todos.findIndex((todo) => {
      return todo.id === id;
    });
    // mock some async logic
    setTimeout(() => {
      setTodos((prev) => prev.filter((x, i) => i !== index));
      setLoading(false);
    }, 1_500);
  };

  const editTodo = (newTodo: ITodo) => {
    setLoading(true);
    let didComplete = false;
    todos.filter((todo: ITodo) => {
      if (todo.id === newTodo.id) {
        setTodos((todos) =>
          todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return {
                ...todo,
                title: newTodo.title,
                description: newTodo.description,
                priority: newTodo.priority
              };
            }
            return todo;
          })
        );
        didComplete = true;
      }
      setLoading(false);
      return didComplete;
    });
  };
  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, completeTodo, editTodo, sortTodos, loading, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
