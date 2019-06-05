import React from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

function ToDoForm(props) {
    return (
      <form class="todoform">
          <input placeholder="...todo" value={props.newToDo.item} />
      </form>
    );
}
export default ToDoForm;