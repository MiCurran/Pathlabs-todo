import * as React from 'react';
import { TodoContext } from '../../context/todoContext';
import { TodoContextType, ITodo } from '../../@types/todo';
import { FaTrash } from 'react-icons/fa';
import { Flex, FormSection, Select, Button } from '../UI';
import { FormEventTypes } from '../../@types/form';
import { PRIORITY_OPTIONS } from '../../config';

const EditTodo = ({
  todo,
  setDisplay
}: {
  todo: ITodo;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { editTodo, removeTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | Record<string, unknown>>();

  const handleForm = (e: FormEventTypes): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const handleEditTodo = (e: React.FormEvent, formData: ITodo | any): void => {
    const editedTodo = { ...todo, ...formData };
    e.preventDefault();
    editTodo(editedTodo);
    setDisplay((prev) => !prev);
  };

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
    setDisplay((prev) => !prev);
  };

  return (
    <Flex className={'Edit--Card'}>
      <Button bgColor="red" onClick={() => handleRemoveTodo(todo.id)}>
        <FaTrash color={'white'} size={'25px'} />
      </Button>
      <form
        style={{ width: '100%' }}
        className="Form"
        id={'edit-todo'}
        onSubmit={(e) => handleEditTodo(e, formData)}
      >
        <Flex flexDirection="column" text="left">
          <EditFormField>
            <label htmlFor="edit-name">Title</label>
            <input onChange={handleForm} defaultValue={todo.title} type="text" id="title" />
          </EditFormField>
          <EditFormField>
            <label htmlFor="edit-description">Description</label>
            <input
              type={'text'}
              onChange={handleForm}
              defaultValue={todo.description}
              name={'description'}
              id="description"
            />
          </EditFormField>
          <FormSection label="Priority" htmlfor="priority">
            <Select
              defaultValue={PRIORITY_OPTIONS[todo.priority + 1].value}
              options={PRIORITY_OPTIONS}
              onChange={handleForm}
              name="priority"
              id={'priority'}
            />
          </FormSection>
        </Flex>
        <Button type={'submit'}>Confirm Edit</Button>
      </form>
    </Flex>
  );
};
export default EditTodo;

const EditFormField = ({ children }: { children: React.ReactNode }) => {
  return <div className={'Edit--Field'}>{children}</div>;
};
