import React from 'react';
import ToDoDisplay from './components/TodoComponents/TodoList';

const toDoList = [
  {
      display: "Learn setState()",
      isChecked: false
  }, 
  {
      display: "Style my Todo List",
      isChecked: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoOnState: toDoList
    }

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
