import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AddedTodosList from './components/AddedTodosList';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addNewTodo = (newTodo: string) => {
    if (!newTodo.length) return;
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (todoToDeleteIndex: number) => {
    setTodos(todos => todos.filter(
      (_todo, index) => index !== todoToDeleteIndex)
    );
  }

  const deleteAllTodos = () => setTodos([]);

  return (
    <div className="App">
      <AddTodo addNewTodo={addNewTodo} deleteAllTodos={deleteAllTodos} />
      <hr />
      <AddedTodosList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
