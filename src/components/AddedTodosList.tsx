import { FC } from "react";

type AddedTodosListProps = {
  todos: string[];
  deleteTodo: (todoToDeleteIndex: number) => void;
}

const AddedTodosList: FC<AddedTodosListProps> = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todoItem, index) => (
        <div className='flex-items-center' key={Math.random()}>
          <p>{todoItem}</p>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default AddedTodosList;
