import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../../reducers/todoSlice'
function TodoItem({ index, todo }) {
   const [isEditing, setIsEditing] = useState(false);
   const [newText, setNewText] = useState(todo.text);
   const dispatch = useDispatch();

   const handleEdit = () => {
      setIsEditing(true);
   };

   const handleSave = () => {
      dispatch(editTodo({ index, newText }));
      setIsEditing(false);
   };

   const handleChange = (e) => {
      setNewText(e.target.value);
   };

   return (
      <div className="todo">
         {isEditing ? (
            <input type="text" value={newText} onChange={handleChange} />
         ) : (
            <span>{todo.text}</span>
         )}
         <div className="todo-buttons">
            {isEditing ? (
               <button onClick={handleSave}>Save</button>
            ) : (
               <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
         </div>
      </div>
   );
}

export default TodoItem;
