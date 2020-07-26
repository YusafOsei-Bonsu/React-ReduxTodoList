import React from 'react';
import { connect } from 'react-redux';
import "../styles/TodoForm.css";

class TodoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todoItem: "",
            currentId: 1
        }
    }

    // Updates the state with the current to-do item
    onChangeHandler = (e) => this.setState({ todoItem: e.target.value });

    // Adds to-do items into the list
    onSubmitHandler = (e) => {
        // Prevents refreshing
        e.preventDefault();
        
        // Appends the current to-do into the list
        const { todoItem, currentId } = this.state;
        this.props.addTodo(currentId, todoItem);

        // Increments the ID for the next to-do
        this.setState({ currentId: currentId + 1 });
    }

    render() {
        return (
            <div className="center">
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder="Enter to-do item here.." onChange={this.onChangeHandler} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (id, task) => dispatch({ type: "ADD_TODO", todo: { id, task, completed: false } })
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);