import React from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
    }
    
    changeHandler = event => {
        this.setState({ task: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({ task: '' });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="...todo" 
                    name="task" 
                    value={this.state.task}
                    onChange={this.changeHandler} 
                /> 
                <button type="submit">Add Todo</button> 
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;