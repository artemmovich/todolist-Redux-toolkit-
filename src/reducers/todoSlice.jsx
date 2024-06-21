import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   todos: [],
};


export const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {

      addTodo: (state, action) => {
         state.todos.push(action.payload);
      },

      removeTodo: (state, action) => {
         state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },

      editTodo: (state, action) => {
         const { index, newText } = action.payload;
         state.todos[index].text = newText;
      },
   },
});


export const { addTodo, removeTodo, editTodo } = todoSlice.actions;


export const selectTodos = (state) => state.todos.todos;


export default todoSlice.reducer;
