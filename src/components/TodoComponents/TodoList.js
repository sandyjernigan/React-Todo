import React from 'react';
import ToDoForm from './TodoForm';
import ToDoItem from './Todo';

// This Displays the To Do List -- imports the individual todo items and the form

// Array for ToDoList
const toDoList = [
    {
        item: "Learn setState",
        isChecked: false
    }, 
    {
        item: "Style my Todo List",
        isChecked: false
    }
  ]

class ToDoDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            todoOnState: toDoList
        }

    }
    render() {
        return (
            <div class="todolist">
                {toDoList.map(item => {
                    return <ToDoItem toDo={item} />;
                })}

                <ToDoForm />
            </div>
        );
    }
}

export default ToDoDisplay;
