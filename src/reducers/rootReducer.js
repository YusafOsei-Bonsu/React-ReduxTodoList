const initialState = {
    todos: []
}

const rootReducer = (state=initialState, action) => {
    return state;
    // switch (action.type) {
    //     // Appends a to-do item into the list
    //     case "ADD_TODO":
    //         return {
    //             ...state,
    //             todos: [...state.todos, action.todo]
    //         };
    //     default:
    //     break;        
    // }
}

export default rootReducer;