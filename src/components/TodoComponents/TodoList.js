import React from 'react';
import Todo from './Todo';

// <TodoList /> receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.

    // todolist={this.state.todoOnState} passes the array of objects as props
    
function TodoList(props) {
    return (
        <div>
            <ul>
                {props.todolist.map(toDo => {
                    return (
                    <Todo toDo={toDo} key={toDo.id}
                        toggleTodo={props.toggleTodo}
                    />
                );})}
            </ul>
        </div>
    );
}

export default TodoList;