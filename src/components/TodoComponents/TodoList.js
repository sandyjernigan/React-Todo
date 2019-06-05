import React from 'react';
import Todo from './Todo';

// <TodoList /> receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.

    // todolist={this.state.todoOnState} passes the array of objects as props
    
function TodoList(props) {
    return (
        <ul class="todolist">
            {props.todolist.map(item => {
                return <Todo toDo={item} />; })}
        </ul>
    );
}

export default TodoList;