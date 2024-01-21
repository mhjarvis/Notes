<h1 style='text-align:center;font-size:3rem;'>Creating a React App</h1>

# General

Within the folder containing your project we can use Vite's CLI to create a template React projects:

    npm create vite@latest my-first-react-app -- --template react

Enter `y` if prompted. Following that:

    cd my-first-react-app       // or whatever you named <my-first-react-app>
    npm install                 // install npm packages needed
    npm run dev                 // setup live server (localhost:5173)

# Setup Notes

## The `public` Folder

The public folder is where all of the static assets related to your app will go. This will include:

- images
- icons
- information files for the browser

## The `src` Folder

Inside the src folder you will place the code that runs your app:

- main.jsx // entry point for the application
