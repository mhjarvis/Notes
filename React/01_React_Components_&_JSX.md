<h1 style='text-align:center;font-size:3rem;'>React Components and JSX</h1>

# General

-   [Odin Project - React Components](https://www.theodinproject.com/lessons/node-path-react-new-react-components)
-   [MDN - Export Statements](https://www.theodinproject.com/lessons/node-path-react-new-react-components)
- [React - Writing Markus with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React - JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)


Functional components are created in their own, dedicated file and then exported. Keep in mind that when using JSX, you should:

1. Always return a single root element;
2. Close self-closing and self-wrapping tags;
3. camelCase **Most** things;

JSX turns into JavaScript, and attributes of elements become keys of JavaScript objects, so you are not able to use dashes or reserved words (e.g. `class`). Because of this, many HTML attributes are written in camelCase. Thus, `stroke-width` should be `strokeWidth`, `class` should be `className`, and `background-color` should be `backgroundColor`.

```jsx
function Greeting() {
    return <h1>&quot; Some text.&quot;</h1>; // always return a single root element
} // also, close self-closing and self-wrapping tags

export default Greeting; // JSX components need to be capitalized
```

These components can then be imported wherever needs be.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Greeting />
    </React.StrictMode>
);
```
