import React from 'react';
import ToDoForm from './TodoForm';
import ToDoItem from './Todo';

// This Displays the To Do List -- imports the individual todo items and the form

// Array for ToDoList
const toDoList = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    }, 
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
  ]

class ToDoDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            todoOnState: toDoList,
            newToDo: {
                item: "Learn React",
                isChecked: false
            }
        }
    }

    updateList = () => {
        this.setState({
            newToDo: {
                ...this.state.newToDo
            }
        })
    }

    render() {
        return (
            <div class="todolist">
                {/* Display List of To Do items */}
                {this.state.todoOnState.map(item => {
                    return <ToDoItem toDo={item} />;
                })}

                <ToDoForm newToDo={this.state.newToDo} />
            </div>
        );
    }
}

export default ToDoDisplay;
