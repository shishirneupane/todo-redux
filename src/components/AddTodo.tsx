import { FC, useState } from "react";

type AddTodoProps = {
  addNewTodo: (newTodo: string) => void;
  deleteAllTodos: () => void;
}

const AddTodo: FC<AddTodoProps> = ({ addNewTodo, deleteAllTodos }) => {
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    addNewTodo(todoInput);
    setTodoInput('');
  }

  return (
    <>
      <h1>Add Todo</h1>
      <div className='flex-items-center'>
        <input type='text' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteAllTodos}>Delete All Todos</button>
      </div>
    </>
  )
}

export default AddTodo;
