import React from 'react';
import ToDoDisplay from './components/TodoComponents/TodoList';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoOnState: toDoList,
      newToDo: {
        task: 'Give Dog a Bath',
        completed: false
      }
    }
  }
  // handler functions
  updateList = () => {
    this.setState({
      newToDo: {
        ...this.state.newToDo
      }})
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoDisplay />
      </div>
    );
  }
}

export default App;

// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
          // <div class="todolist">
          //     {/* Display List of To Do items */}
          //     {this.state.todoOnState.map(item => {
          //         return <ToDoItem toDo={item} />;
          //     })}

          //     <ToDoForm newToDo={this.state.newToDo} />
          // </div>