import React from 'react';
import "../styles/TodoForm.css";

class TodoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todoItem: ""
        }
    }

    // Updates the state with the current to-do item
    onChangeHandler = (e) => this.setState({ todoItem: e.target.value });

    // Prints current to-do item
    onSubmitHandler = (e) => {
        // Prevents refreshing
        e.preventDefault();
    }

    render() {
        return (
            <div className="center">
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder="Enter to-do item here.." size="70" onChange={this.onChangeHandler} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default TodoForm;