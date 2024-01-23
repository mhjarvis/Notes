<h1 style='text-align:center;font-size:3rem;'>Passing Data Between Components</h1>

# General

-   [Odin Project - Passing Data Between Components](https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components)

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
        fontSize: fontSize + 'px'
    }
    return <button style={buttonStyle}>{text}</button>

    //... {code} ...
}
```

## Default Props
