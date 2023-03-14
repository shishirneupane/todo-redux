import { FC, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TTodo } from "../types";

type AddTodoProps = {
  todos: TTodo[];
  addNewTodo: (newTodo: TTodo) => void;
  deleteAllTodos: () => void;
}

const AddTodo: FC<AddTodoProps> = ({ todos, addNewTodo, deleteAllTodos }) => {
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    addNewTodo({
      id: uuidv4(),
      title: todoInput,
    });
    setTodoInput('');
  }

  return (
    <>
      <h1>{todos.length} todos in your TODO list</h1>
      <div className='flex-items-center'>
        <input type='text' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteAllTodos}>Delete All Todos</button>
      </div>
    </>
  )
}

export default AddTodo;
