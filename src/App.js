import React, { Component } from "react";
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.

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
  constructor(props) {
    super(props);
    this.state = {
      todoOnState: toDoList,
      task: '',         // todo title
      id: '',           // Unique Time Stamp that will be assigned by Date.now()
      completed: false  // default to false and will be the field that we toggle when we complete a todo.
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // Handler Functions
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newToDo = {
      task: this.state.task, 
      id: Date.now(), 
      completed: false
    }

    this.setState({
      todoOnState: [...this.state.todoOnState, newToDo]
    });
    toDoList.push(newToDo);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todolist">
          <TodoList todolist={this.state.todoOnState} />

          <form onSubmit={this.submitHandler} class="todoform">
            <input type="text" placeholder="...todo" 
              name="task" 
              value={this.state.task}
              onChange={this.changeHandler} 
            /> 
            <button type="submit">Add Todo</button> 
            <button>Clear Completed</button>
          </form>

          {/* New Branch to expand on getting form and clear button working */}

          {/* <ToDoForm 
            task={this.state.task} 
            submitHandler={() => this.submitHandler()} 
            changeHandler={() => this.changeHandler()} 
          /> */}

        </div>
      </div>
    );
  }
}

export default App;