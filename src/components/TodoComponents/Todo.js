import React from 'react';

// Component for the individual todo Items

function ToDoItem(props) {
    return (
      <li>{props.toDo.item}</li>
    );
}
export default ToDoItem;
