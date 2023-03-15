import AddTodo from './components/AddTodo';
import AddedTodosList from './components/AddedTodosList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <hr />
      <AddedTodosList />
    </div>
  );
}

export default App;
