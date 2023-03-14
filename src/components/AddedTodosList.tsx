import { FC } from "react";
import { TTodo } from "../types";
import AddedTodoListItem from "./AddedTodoListItem";

type AddedTodosListProps = {
  todos: TTodo[];
  deleteTodo: (todoToDeleteId: TTodo['id']) => void;
}

const AddedTodosList: FC<AddedTodosListProps> = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map(todoItem => (
        <div key={todoItem.id}>
          <AddedTodoListItem
            todoItem={todoItem}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </>
  )
}

export default AddedTodosList;
