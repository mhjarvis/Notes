<h1 style='text-align:center;font-size:3rem;'>Rendering Techniques</h1>

# General

-   [Odin Project - Rendering Techniques](https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques)

## Rendering a List of Elements in JSX

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
