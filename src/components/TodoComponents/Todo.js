import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

function Todo(props) {
    return (
      <li>{props.toDo.task}</li>
    );
}
export default Todo;
