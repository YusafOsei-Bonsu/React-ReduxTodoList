const initialState = {
    todos: []
}

const rootReducer = (state=initialState, action) => {
    
    switch (action.type) {
        // Appends a to-do item into the list
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        case "DELETE_TODO":
            // A list without the todo that'll be deleted
            let newTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state, 
                todos: newTodos
            }
        default:
            return state;       
    }
}

export default rootReducer;