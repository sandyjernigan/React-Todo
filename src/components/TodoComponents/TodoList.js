import React from 'react';
import ToDoForm from './TodoForm';
import ToDoItem from './Todo';

// This Displays the To Do List -- imports the individual todo items and the form

const ToDoDisplay = () => {
    return (
      <div class="todolist">
          <ToDoForm />
          <ToDoItem />
      </div>
    );
}
export default ToDoDisplay;
