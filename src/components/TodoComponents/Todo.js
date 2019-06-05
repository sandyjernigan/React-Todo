import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

function ToDoItem(props) {
    return (
      <li>{props.toDo.item}</li>
    );
}
export default ToDoItem;
