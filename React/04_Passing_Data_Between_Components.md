<h1 style='text-align:center;font-size:3rem;'>Passing Data Between Components</h1>

# General

-   [Odin Project - Passing Data Between Components](https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components)
- [React - Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

## Using `props` in React

Data is transferred from parent components to child components via props - this data transfer is unidirectional. These values are set when the element is created (e.g. `<Button ... />`).

```jsx
// React function to add styling and return the button with text,
// all of which is passed to the prop object in the below call
function Button() {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    }
    return (
        <button style={buttonStyle}>{props.text}</button>
    )

    //...
        <Button text="Click me!" color="blue" fontSize={12} />
        <Button text="Don't Click Me!" color="pink" fontSize={22} />
    //...
}
```

## Prop Destructuring

Prop destructuring means to unpack your props in the component arguments. This allows for more concise and readable code.

```jsx
function Button({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };
    return <button style={buttonStyle}>{text}</button>;

    //... {code} ...
}
```

## Default Props

Default props can be set to either define common values (or the standard) or they can be used to cover ourselves in case we forget to define the values.

```jsx
Button.defaultProps = {
    text: "Click Me Baby!",
    color: "blue",
    fontSize: 12,
};
```

This approach can also be combined with prop destructuring to save space, much as you would in regular JavaScript.

```jsx
function Button({ text = "Click Me Baby!", color = "blue", fontSize = 14 }) {
    //...
}
```

## Function as Props

You can also pass on functions to props. Remember that when passing through a function, do not call the function by including `()` at the end of the function. This would cause it to execute as the button renders.

```jsx
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    )
}

export default function App() {
    const handleButtonClick = () => {
        window.location.href = 'http://www.google.com';
    }

    return (
        <div>
            <!-- handleButtonClick is a substitute for the above function;
                 handleClick is what is passed on to the Button, which is
                 then linked to the onClick property. This is actually a reference call.
            -->
            <Button handleClick={handleButtonClick} />
        </div>
    )
}

```
