<h1 style='text-align:center;font-size:3rem;'>State</h1>

# General

-   [Odin Project - State](https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-state)
-   [Articel - What is State?](https://academind.com/tutorials/what-is-state)
-   [React - State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
-   [React - Render and Commit](https://react.dev/learn/render-and-commit)
-   [Article - React Reconciliation Algorithm](https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40)
-   [React - State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
-   [React - Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
-   [React - Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

Because apps will change over time - whether being changed by a button or updating information received from an API - React provides primitives to help manipulate the state of your apps, making them dynamic.

## What is `state` in React

State is a components memory - it allows components to 'remember' things about itself. All functions in React that start with `use`, for instance, are considered hooks.

In React, when a component's state (or props) change, the component is destroyed and recreated from scratch. When it is rebuilt, it will do so with the latesst state value returned from `useState`. This is called rerendering.

## The `useState` Hook

`useState` is a built-in hook that allows you to define state in functional component. It takes an initial value as a parameter and returns an array with two elements that can be destructured to get:

1. The current `state` value;
2. A function to update the `state` value;

`useState` commonly follows a pattern.

```jsx
import { useState } from "react"; // import to use `useState`
// the initialValue is what is rendered the first time
const [stateValue, setStateValue] = useState(initialValue);
// when `setStateValue` is called by a function, the stateValue gets updated and remembers the new value, which it will use during the rerender process

// adapt for the use case:
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

When you call `useState`, you are telling React that you want this component to remember something. Stat is also local to the component; if you build several copies of a component, each component's state will be isolated to that component.

## Hooks

Hooks are functions that let you use React features. All hooks are recognizable in that they have the `use` prefix. Hooks also have rules that must be followed:

1. Only call Hooks inside of Component Functions; they cannot be called from inside loops or conditions.
2. Only call Hooks on the top level.

# How to Structure State

## State Should Not Be Mutated

Do not mutate values. If we need to change state, we should always use the `setState` function.

```jsx
// BAD - Don't do this!
const handleIncreaseAge = () => {
    // mutating the current state object
    person.age = person.age + 1; // this will increase the person.age value, but the page will never rerender to update the actual variable.
    console.log(person.age); // this prints the increased value
    setPerson(person);
};

// GOOD - Do this!
const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
};
```

We need to provide a new object to setState so that we can guarantee to rerender the page.

## How `state` Updates

State updates are asynchronous. State variables are not reactive, the components are. Calling `setState` re-renders the entire component instead of just changing the variable.

The following creates an infinite loop.

```jsx
function Component() {
    const [count, setCount] = useState(0);

    setCount(count + 1); //this is called during render, REact detect the change, and rerenders, infinitly.

    return <h1>{count}</h1>;
}
```

### State Updater Funcfions

// needs update

## Controlled Components

Some HTML elements maintain their own internal state, such as `input`. When you type into an `input`, it updates its own value on every keystroke. If you would like to control the value of the `input` element (i.e. set it yourself), controlled components are key.

```jsx
function CustomInput() {
    cont[(value, setValue)] = useState("");

    return (
        <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}
```

Here we define our own state using the `useState` hook. We set the `value` prop of the `input` to the state variable and update the state variable on every `onChange` event. Now, when the user types something, React will ensure you have the latest text in `value`.

## Difference between State and Props

State:

-   Internal data, owned by the component.
-   Component memory
-   Can be updated by the component itself.
-   Updating state causes component to re-render
-   Used to make components interactive

Props:

-   External data, owned by parent component.
-   Similar to function parameters.
-   Read-only.
-   Receiving new props causes component to re-render. Usually when the parent's state has been updated.
-   used by parent to configure child component ('settings')
