import React from "react";
import Background from './components/backgroundStyle/bg';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
  }

  addTodo = newtask => {
    const newToDo = {
      task: newtask, 
      id: Date.now(), 
      completed: false
    }
    this.setState({
      todoOnState: [...this.state.todoOnState, newToDo] });
  }

  toggleTodo = id => {
    const newToDoList = this.state.todoOnState.map(task => {
      if (task.id === id) {
        const newTask = {
          ...task,
          completed: !task.completed
        };
        return newTask;
      } else {
        return task;
      }});

      this.setState({ todoOnState: newToDoList });
  }

  clearTodo = () => {
    console.log('Clicked Clear.');
    const newToDoList = this.state.todoOnState.filter(task => task.completed === false);
    this.setState({ todoOnState: newToDoList });
  }

  render() {
    return (
      <div>
        <Background />
        <div className="main">
          <h2>Honey Do ... To Do List!</h2>
          <div className="todolist">
            <TodoList 
              todolist={this.state.todoOnState} 
              toggleTodo={this.toggleTodo}
            />
            <TodoForm addTodo={this.addTodo} />
            
            <br />
            
            <button onClick={this.clearTodo}>Clear Completed</button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;