import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { DismissedState, TTodo } from "../types";
import { deleteTodo } from "./todos.slice";

type AddedTodoListItemProps = {
  todoItem: TTodo;
}

const AddedTodoListItem: FC<AddedTodoListItemProps> = ({ todoItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [dismissedState, setDismissedState] = useState<DismissedState>(DismissedState.DEFAULT);

  const handleDeleteTodo = () => {
    setDismissedState(DismissedState.REQUESTED);
    setTimeout(() => {
      dispatch(deleteTodo(todoItem.id));
      setDismissedState(DismissedState.DISMISSED);
    }, 5000);
  }

  if (dismissedState === DismissedState.DISMISSED) return null;

  if (dismissedState === DismissedState.REQUESTED) {
    return <p>{`Todo item "${todoItem.title}" will be deleted in 5 seconds`}</p>
  }

  return (
    <>
      {dismissedState === DismissedState.DEFAULT && (
        <div className='center-flex-items'>
          <p>{todoItem.title}</p>
          <button onClick={handleDeleteTodo}>Delete</button>
        </div>
      )}
    </>
  )
}

export default AddedTodoListItem;
