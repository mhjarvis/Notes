<h1 style='text-align:center;font-size:3rem;'>React</h1>

# General

* [The Odin Project - Intro to React](https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-react)

React is a JavaScript library for building user interfaces. React is declarative, meaning you define the target UI state(s), not the steps for how to get there. There are several advantages: 

* Reusability of components
* Well supported due to its popularity and large community
* React is not opinionated, which means that it won’t force you to follow any specific design patterns, project organizational structure, or logic. It’s all up to you.
* A smaller learning curve, especially when you already have a good grasp of JavaScript and HTML/CSS from our previous lessons.

# Components
Components are the main building blocks of React. Put together, these are what build websites / webapps. These components wrap HTML, CSS, JavaScript, and anything else used. You create small building blocks and use them to compose the UI, thus allowing reuse. 

Components are technically represented as JavaScript functions with two rules:
1. The name starts with a uppercase character. 
2. The function must return a 'renderable' value.

# Rules of JSX

* [React - Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
* [React - JavaScript in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

The JSX extension on files means JavaScript Syntax eXtension, allowing us to describe and create HTML elements in JavaScript in a declarative way. JSX files are transformed into code that will work in the browser (JSX does not). 

Rules for JSX implements are as follows:

1. Return a single root element. This can be a ```div``` or a React fragment (```<></>```). As long as everything is wrapped in a single element, you can have as many children / other elements as you need.

    function App() {
        return (
            <div>
                <h1>Example1</h1>
                <h2>Example2</h2>
            </div>
        )
    }

2. Close all tags. In HTML, many tags are self-closing; in JSX, these must be explicitly closed and wrapped.

    function App() {
        return (
            <>
                <input />
                <li></li>
            </>
        )
    }

3. camelCase <strong>Most</strong> things. JSX turns into JavaScript, and attributes of elements become keys of JavaScript, so you cannot use dashess or reserved words such as ```class```.

    function App() {
        return (
            <div className="container">
                <svg>
                    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
                </svg>
            </div>
        )
    }

