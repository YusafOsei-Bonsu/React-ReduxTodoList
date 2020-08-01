# React/Redux To-Do List
This is a side project that focuses on the development of a to-do list using React and Redux. Below is the appearence of the to-do list.

![UI of the React/Redux to-do list](public\assets\react-redux-ui.JPG "todo-list UI")

## Tech Stack
- React (JSX)
- Redux
- CSS

## Use-cases
- As a user, I want to be able to see all to-do items in the list. &#x2611;
- As a user, I want to scroll through the list to see all to-do items. &#x2611;
- As a user, I want to add items to the to-do list, in order to see which tasks are incomplete. &#x2611;
- As a user, I want to cross-out/delete tasks that I have completed. &#x2611; 

## What did I do?
After cloning the repo, run the application by entering the terminal command: `npm start`  (from the root directory). 

1. First, I initialised a new NPM package via `npm init` in the terminal. Next, I proceeded to install `create-react-app` through the command `npm install create-react-app`. I ran `npx create-react-app reactreduxtodolist`, which created the React application. Later, I modified the folder structure by test files, seperating container & functional components, & CSS styling into their own folders. I also HTML refactored code (by omitting comments) and deleted unneccessary files. 
2. Redux was installed and was later configured with the React application, which allowed the components to connect to the store and access certain the future to-do data.
3. The header was the first component I created & styled; it consists of the logo and the application's name.
4. Next, I created a form as a component (i.e. `TodoForm`), which consists of a text box and submit button. For every string entered into the text box, the component's state is updated with that string via an `onChangeHandler`. Pressing the submit button will dispatch an action that appends the string (as an object, which consists of the string and a numerical ID) into the redux store via the `OnSubmitHandler`.
5. Afterwards, I created a `TodoList` that contains the list of to-do items entered by the user. To display the to-do items, the component is connected to the Redux store to access the data. The to-do items are represented by the `Todo` components. 
6. Each `Todo` component displays the string (entered by the user) and a button that removes the to-do item from the store. 

## Errors/Blockers & Fixes

| Errors        | Fixes         | 
| :-------------|--------------:| 
| `TypeError: Cannot read property 'todos' of undefined` when attemping to map state to props | The reducer function returned a state | 
| `TypeError: dispatch is not a function` | The first argument should be `null` & `mapDispatchToProps` should be the second argument |
| `TypeError: dispatch is not a function` when implementing the functionality to delete to-do items from the Redux store | In the to-do list component, each to-do item component possessed a prop that was set to their respective ID. In the to-do component, I directly accessed this prop (`this.props.id`) in the `handleClick()` method |

## What I have learnt from this project?
- I have learnt how to connect a component to the Redux store to grab the current state.