import * as React from 'react';
import { TodoContext } from '../../context/todoContext';
import { TodoContextType, ITodo } from '../../@types/todo';
import { clearForm } from '../../utils/helper';
import { FormSection, Button, Flex, Select } from '../UI';
import { FormEventTypes } from '../../@types/form';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { PRIORITY_OPTIONS } from '../../config';

const AddTodo: React.FC = () => {
  const { saveTodo, loading } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | Record<string, unknown>>();

  const handleForm = (e: FormEventTypes): void => {
    let value: string | number = e.currentTarget.value;
    if (e.currentTarget.id === 'priority') {
      value = parseInt(e.currentTarget.value);
    }
    setFormData({
      ...formData,
      [e.currentTarget.id]: value
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any): void => {
    e.preventDefault();
    saveTodo(formData);
    clearForm('add-todo');
  };

  return (
    <Flex
      flexDirection="column"
      text="left"
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '25px',
        margin: '25px'
      }}
    >
      <h2>Add New To-Do</h2>
      <form className="Form" id={'add-todo'} onSubmit={(e) => handleSaveTodo(e, formData)}>
        <Flex flexDirection="row" wrap={'wrap'} text={'left'}>
          <FormSection htmlfor="name" label={'Title'}>
            <input onChange={handleForm} type="text" id="title" />
          </FormSection>
          <FormSection htmlfor="description" label="Description">
            <input type={'text'} onChange={handleForm} id="description" />
          </FormSection>
          <FormSection htmlfor="priority" label="Priority">
            <Select
              options={PRIORITY_OPTIONS}
              onChange={handleForm}
              name="priority"
              id={'priority'}
            />
          </FormSection>
          <Button
            type={'submit'}
            isDisabled={!formData}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '15px'
            }}
          >
            {loading ? (
              <FaSpinner />
            ) : (
              <>
                <FaPlus /> Add Todo
              </>
            )}
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
export default AddTodo;
