import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AddedTodoListItem from "./AddedTodoListItem";

const AddedTodosList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      {todos.map(todoItem => (
        <div key={todoItem.id}>
          <AddedTodoListItem todoItem={todoItem} />
        </div>
      ))}
    </>
  )
}

export default AddedTodosList;
