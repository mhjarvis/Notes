<h1 style='text-align:center;font-size:3rem;'>Keys in React</h1>

# General

-   [Odin Project - Keys in React](https://www.theodinproject.com/lessons/node-path-react-new-keys-in-react)
-   [UUID NPM - Create Unique Keys](https://github.com/uuidjs/uuid#readme)
-   [React - on Keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
-   [Video - Index as an Anti-Pattern](https://youtu.be/xlPxnc5uUPQ)

Keys are attributes used to uniquely identify and keep track of elements in a collection during rendering and updates.

# Using Keys

Keys are passed into a component as a prop. Keys should be unique as they are what is used to update elements.

```jsx
<Component key={keyValue} />
    // or
<div key={keyValue} />
```

You can use packages such as `uuid` to generate these unique ids.

```jsx
import { v4 as uuid } from "uuid"; //  import uuid via npm
// a list of todos, each todo object has a task and an id
const todos = [
    { task: "mow the yard", id: uuid() },
    { task: "Work on Odin Projects", id: uuid() },
    { task: "feed the cat", id: uuid() },
];

function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                // here we are using the already generated id as the key.
                <li key={todo.id}>{todo.task}</li>
                // DON'T do the following i.e. generating keys during render
                // <li key={uuid()}>{todo.task}</li>
            ))}
        </ul>
    );
}
```

Its also possible to use an index number as the key.

```jsx
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function MonthList() {
    return (
        <ul>
            {/* here we are using the index as key */}
            {months.map((month, index) => (
                <li key={index}>{month}</li>
            ))}
        </ul>
    );
}
```
