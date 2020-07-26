const initialState = {
    todos: [
        {
            id: 1,
            task: "calisthenics",
            completed: false
        },
        {
            id: 2,
            task: "coding",
            completed: false
        },
        {
            id: 3,
            task: "long walk",
            completed: false
        }
    ]
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