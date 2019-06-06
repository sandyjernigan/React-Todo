import React, { Component } from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoOnState: '',
            task: '',         // todo title
            id: '',           // Unique Time Stamp that will be assigned by Date.now()
            completed: false  // default to false and will be the field that we toggle when we complete a todo.
        };
    }
    
    changeHandler = event => {
        this.setState({ task: event.target.value });
      };

    render() {
        return (
            <form onSubmit={this.submitHandler} className="todoform">
                <input type="text" placeholder="...todo" 
                    name="task" 
                    value=''
                    onChange={this.changeHandler} 
                /> 
                <button type="submit">Add Todo</button> 
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {

//     };
// }

// class TodoForm extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default connect(
//     mapStateToProps,
// )(TodoForm);