import { FC, useState } from "react";
import { DismissedState, TTodo } from "../types";

type AddedTodoListItemProps = {
  todoItem: TTodo;
  deleteTodo: (todoToDeleteId: TTodo['id']) => void;
}

const AddedTodoListItem: FC<AddedTodoListItemProps> = ({
  todoItem,
  deleteTodo,
}) => {
  const [dismissedState, setDismissedState] = useState<DismissedState>(DismissedState.DEFAULT);

  const handleDeleteTodo = () => {
    setDismissedState(DismissedState.REQUESTED);
    setTimeout(() => {
      deleteTodo(todoItem.id);
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
        <div className='flex-items-center'>
          <p>{todoItem.title}</p>
          <button onClick={handleDeleteTodo}>Delete</button>
        </div>
      )}
    </>
  )
}

export default AddedTodoListItem;
