import React from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

function ToDoForm(props) {
    return (
        <input placeholder="...todo" value={props.newToDo.task} /> 
        <button>Add Todo</button> 
        <button>Clear Completed</button>
    );
}
export default ToDoForm;