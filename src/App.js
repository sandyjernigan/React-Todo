import React from 'react';
import ToDoDisplay from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor() {
    super();
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
