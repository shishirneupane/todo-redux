import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { v4 as uuidv4 } from 'uuid';
import { addNewTodo, deleteAllTodos } from "./todos.slice";

const AddTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const [todoInputText, setTodoInputText] = useState('');

  const handleAddTodo = () => {
    if (!todoInputText.length) return;
    dispatch(addNewTodo({
      id: uuidv4(),
      title: todoInputText,
    }));
    setTodoInputText('');
  }

  return (
    <>
      <h1>{todos.length} todos in your TODO list</h1>
      <div className='center-flex-items'>
        <input type='text' value={todoInputText} onChange={(e) => setTodoInputText(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={() => {
          if (!todos.length) return;
          dispatch(deleteAllTodos());
        }}>Delete All Todos</button>
      </div>
    </>
  )
}

export default AddTodo;
