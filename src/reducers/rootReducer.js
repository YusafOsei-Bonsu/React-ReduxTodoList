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
        // Removes a to-do item from the list
        case "DELETE_TODO":
            let newList = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: newList
            };
        default:
            return state;       
    }
}

export default rootReducer;