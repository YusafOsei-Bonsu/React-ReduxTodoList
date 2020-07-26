# React/Redux To-Do List
This is a side project that focuses on the development of a to-do list using React and Redux.

## Tech Stack
- React
- Redux
- CSS
- HTML
- JSX

## Use-cases
- As a user, I want to be able to see all to-do items in the list. &#x2611;
- As a user, I want to scroll through the list to see all to-do items. &#x2611;
- As a user, I want to add items to the to-do list, in order to see which tasks are incomplete. &#x2611;
- As a user, I want to cross-out/delete tasks that I have completed.

## What did I do?
To run the application, enter the following command: `npm start`, from the root directory within the terminal. 

1. First, I initialised a new NPM package via `npm init` in the terminal. Next, I proceeded to install `create-react-app` through the command `npm install create-react-app`. I ran `npx create-react-app reactreduxtodolist`, which created the React application. Later, I modified the folder structure by test files, seperating container & functional components, & CSS styling into their own folders. I also HTML refactored code (by omitting comments) and deleted unneccessary files. 
2. The header was the first component I created & styled. it consists of an image and text. 

## Blockers/Resolutions

| Blockers      | Resolutions   | 
| :-------------|--------------:| 
| `TypeError: Cannot read property 'todos' of undefined` when attemping to map state to props | The reducer function returned a state | 

## What I have learnt from this project?
- I have learnt how to connect a component to the Redux store to grab the current state.