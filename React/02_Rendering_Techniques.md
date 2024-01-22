<h1 style='text-align:center;font-size:3rem;'>Rendering Techniques</h1>

# General

-   [Odin Project - Rendering Techniques](https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques)
- [React - Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [React - Rendering Lists](https://react.dev/learn/rendering-lists)


# Rendering a List of Elements in JSX

Most of the time you will be dealing with data structures, so it will make more sense to render items dynamically instead of hard-coding everything.

```jsx
function App() {
    const animals = ["Dog", "Cat", "Rat", "Bat"]; // array holding all animals values

    /**
     * Use map to return a new array of <li> elements, adding animal as its text.
     * The 'key' in our <li> element lets React know the identity of each element in the list.
     */

    const animalsList = animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
    });

    return (
        <div>
            <h1>Animals: </h1>
            <ul>{animalsList}</ul>
        </div>
    );
}
```

# Rendering a List of Components in JSX

`props` are arguments that are passed into components.

```jsx
function ListItem(props) {
    return <li>{props.animal}</li>; // props includes the key 'animal' set to 'Lion', etc.
}

// props in this case contains the key 'animals' which is linked to the array 'animals'
function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {    // props.animals is the animals array
                // set the key in ListItem to animal, and that to the animal from the array
                return <ListItem key={animal} animal={animal} />;
            })}
        </ul>
    );
}

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <!-- define the animals property on props with animals={animals} -->
            <!-- this can be defined however we want, e.g. animalList={animals} -->
            <List animals={animals} />
            <!-- in other words, `animals: ["Lion", "Cow", "Snake", "Lizard"]`>
        </div>
    );
}
```

# Conditionally Rendering UI

## Using Boolean Values

One way to conditionally pick what is rendered is by using a boolean value.

```jsx
function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? ( // true or false
                    <li key={animal}>{animal}</li>
                ) : null;
            })}
        </ul>
    );
}

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}
```

## Using the && Operator

This can also be accomplished using the `&&` operator.

```jsx
function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}
```

## Other Ways to Render Conditionally

Using `if`, `if/else`, and `switch` statements are also approaches that can be taken.

```jsx
function List(props) {
    // this is usually a default for when a page is still loading - to show something
    // to the user and indicate content is still being fetched.
    if (!props.animals) {
        // check if props is even assigned or exists
        return <div>Loading...</div>;
    }
    if (props.animals.length === 0) {
        // check if there is anything in the array
        return <div>There are no animals in the list!</div>;
    }
    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function App() {
    const animals = [];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}
```
