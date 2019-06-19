import React from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

function ToDoForm(props) {
    return (
        <form onSubmit={props.submitHandler} class="todoform">
            <input type="text" placeholder="...todo" 
                name="task" 
                value={props.task}
                onChange={props.changeHandler} 
            /> 
            <button type="submit">Add Todo</button> 
            <button>Clear Completed</button>
        </form>
    );
}
export default ToDoForm;