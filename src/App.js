import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
      newToDo: {
        task: 'Give Dog a Bath', // todo title
        id: '', // Unique Time Stamp that will be assigned by Date.now()
        completed: false // default to false and will be the field that we toggle when we complete a todo.
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
        <TodoList todolist={this.state.todoOnState} />
      </div>
    );
  }
}

export default App;