const initialState = {
    todos: []
}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        // Appends a to-do item into the list
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        default:
        break;        
    }
}

export default todoReducer;