import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodo } from "../types";

const initialState: TTodo[] = [];

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TTodo>) => {
      return state = [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<TTodo['id']>) => {
      return state = state.filter(todo => todo.id !== action.payload);
    },
    deleteAllTodos: state => state = initialState,
  }
});

export const { addNewTodo, deleteTodo, deleteAllTodos } = todos.actions;
export default todos.reducer;
