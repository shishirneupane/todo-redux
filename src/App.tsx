import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AddedTodosList from './components/AddedTodosList';
import { TTodo } from './types';

function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addNewTodo = (newTodo: TTodo) => {
    if (!newTodo.title.length) return;
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (todoToDeleteId: TTodo['id']) => {
    setTodos(todos => todos.filter(
      todo => todo.id !== todoToDeleteId
    ));
  }

  const deleteAllTodos = () => setTodos([]);

  return (
    <div className="App">
      <AddTodo todos={todos} addNewTodo={addNewTodo} deleteAllTodos={deleteAllTodos} />
      <hr />
      <AddedTodosList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
