import * as React from 'react';
import { ITodo, TodoContextType } from '../../@types/todo';
import { TodoContext } from '../../context/todoContext';
import { EditTodo } from './';
import { FiEdit } from 'react-icons/fi';
import { FaCheckCircle, FaUndo } from 'react-icons/fa';
import { Flex, Button } from '../UI';

type Props = {
  todo: ITodo;
};

const Todo: React.FC<Props> = ({ todo }) => {
  const { completeTodo } = React.useContext(TodoContext) as TodoContextType;
  const checkTodo: string = todo.status ? `line-through` : '';
  const [display, setDisplay] = React.useState<boolean>(false);

  return (
    <div className={'Card--wrapper'}>
      <div className="Card">
        <div className="Card--text">
          <Flex flexDirection="column" text="left">
            <h1 className={checkTodo}>{todo.title}</h1>
            <p className={checkTodo}>{todo.description}</p>
            <ProiorityTag priority={todo.priority} />
          </Flex>
        </div>
        <Button
          onClick={() => setDisplay(!display)}
          bgColor={'#e2a518'}
          className={'Card--button edit--button'}
        >
          <FiEdit />
        </Button>
        <Button
          onClick={() => completeTodo(todo.id)}
          className={'Card--button'}
          style={{ backgroundColor: '#1B9B5B', display: 'flex', justifyContent: 'space-between' }}
        >
          {!todo.status ? (
            <>
              <FaCheckCircle /> Done
            </>
          ) : (
            <>
              <FaUndo /> Undo
            </>
          )}
        </Button>
      </div>
      <EditDrawer todo={todo} display={display} setDisplay={setDisplay} />
    </div>
  );
};
export default Todo;

const EditDrawer = ({
  todo,
  display,
  setDisplay
}: {
  todo: ITodo;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id={'edit-wrapper'}
      className={'modal-wrapper'}
      style={{ display: display ? 'flex' : 'none' }}
    >
      <EditTodo todo={todo} setDisplay={setDisplay} />
    </div>
  );
};

const ProiorityTag = ({ priority = 2 }: { priority: number }) => {
  const priorities = [
    { label: 'low', color: '#0000ff' },
    { label: 'medium', color: '#e2a518' },
    { label: 'high', color: '#ff0000' }
  ];
  const btnColor = priorities[priority].color || '#0000ff';

  return (
    <button
      className={'priority--tag'}
      style={{
        color: btnColor,
        border: `1px solid ${btnColor}`
      }}
    >
      {priorities[priority].label}
    </button>
  );
};
