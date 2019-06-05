import React from 'react';

// Component for the ToDoList Form
function ToDoForm(props) {
    return (
      <form class="todoform">
          <input placeholder="...todo" value={props.newToDo.item} />
      </form>
    );
}
export default ToDoForm;