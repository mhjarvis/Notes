<h1 style='text-align:center;font-size:3rem;'>Transitions</h1>

# General

[Link](hypertext)<br>

# Setting Up a New React App - Method 1

This is for experimentation and is not used for real-world projects, using `create-react-app`.

In the folder you want to build the app:

    npx create-react-app@5 new-app-name

# Setting Up a New React App - Method 2

This is made using Vite. This requires you to setup several tool manually and can be trouble initially. It is however, extremely fast.

```jsx
    npm create vite@latest my-first-react-app -- --template react       // replace app name

    Need to install the following packages:
        create-vite@5.X.X
    Ok to proceed?  (y)                         // enter 'y'

    cd my-first-react-app                       // enter the folder
    npm install
    npm run dev                                 // creates live server on localhost:5173
```
