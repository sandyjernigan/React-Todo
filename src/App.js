import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: []
    }

  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
