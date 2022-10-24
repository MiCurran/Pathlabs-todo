export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: number;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => ITodo[];
  completeTodo: (id: number) => void;
  sortTodos: (type: 'priority' | 'id') => void;
  editTodo: (newTodo: ITodo) => void;
  removeTodo: (id: number) => void;
  loading: boolean;
};
