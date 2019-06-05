import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.

// Array for ToDoList
const toDoList = [
  {
      task: 'Organize Garage', 
      id: 1528817077286, 
      completed: false // 
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
      task: '',         // todo title
      id: '',           // Unique Time Stamp that will be assigned by Date.now()
      completed: false  // default to false and will be the field that we toggle when we complete a todo.
    };
  }

  // Handler Functions
  changeHandler = event => {
    this.setState({ [event.target.task]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todolist">
          <TodoList todolist={this.state.todoOnState} />
          <ToDoForm newToDo={this.state.task} />
        </div>
      </div>
    );
  }
}

export default App;