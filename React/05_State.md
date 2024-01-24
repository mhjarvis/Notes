<h1 style='text-align:center;font-size:3rem;'>State</h1>

# General

-   [Odin Project - State](https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-state)
-   [Articel - What is State?](https://academind.com/tutorials/what-is-state)
-   [React - State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
-   [React - Render and Commit](https://react.dev/learn/render-and-commit)
- [Article - React Reconciliation Algorithm](https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40)

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

## How to Structure State
