import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from '../../reducers/todoSlice';
import TodoItem from '../TodoItem/index';
import TodoForm from '../TodoForm/index'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../TodoList/index.scss'; // Імпорт стилів для анімації

function TodoList() {
   const todos = useSelector(selectTodos);
   const dispatch = useDispatch();

   const handleAddTodo = (text) => {
      dispatch(addTodo({
         text,
         id: Date.now(), // Додаємо унікальний ID для кожного завдання
      }));
   };

   return (
      <div className="todo-list">
         <TodoForm addTodo={handleAddTodo} />

         {todos.map((todo, index) => (

            <TodoItem key={todo.id} index={index} todo={todo} />

         ))}

      </div>
   );
}

export default TodoList;
