<h1 style='text-align:center;font-size:3rem;'>Basic Syntax</h1>

# Using and Outputting Dynamic Values

We can use JavaScript inside of React components by using curly braces (`{ }`). This includes simple numbers, strings, or return values of functions.

    const reactDescriptions = ['Funamental', 'Cruicial', 'Core']

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1))
    }

    function Header() {
        const description = reactDescriptions[genRandomInt(3)];
    }

    return (
        <header>
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are
            going to build!</p>
        </header>
    );

# Loading Dynamic Images

Similarly, the best way to use images as parts of components is to first import them:

    import reactImg from './assets/react-core-concepts.png';

Then, we can use the imported image variable as a JavaScript function within our components (also by using `{}`):

    function Header() {
        return (
            <header>
                <img src={reactImg} alt="Stylized atom" />
                <h1>PoopReact Essentials</h1>
            </header>
        );
    }

# Making Components Reusable with Props Syntax

React allows you to pass data to components via a concept called "Props". This allows you to reuse componenets but with different text or content. When using the `props` parameter, a object will be sent to it containing the values needed for the function to work.

    function CoreConcept(props) {               // new component
        return (
            <li>
                <img src={props.img} alt="..." />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        );
    }

    function App() {
        return (
            <div>
                <Header />
                <main>
                    <section id="core-concepts">
                        <h2>Core Concepts</h2>
                        <ul>
                            <CoreConcept
                                title="Components"
                                description="The core UI building block."
                                img={componentsImg}
                                />
                            <CoreConcept />
                        </ul>
                    </section>
                </main>
            </div>
        );
    }

Alternativly, you can import everything from a pre-built array in a different file. This can also be done using the spread operator:

    import { CORE_CONCEPTS } from './data.js';

    ...
        <h2>Core Concepts</h2>
        <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />           // spread operator
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept                                    // long way
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
        </ul>
    ...

We can also destructure the props object using `{}`:

    function CoreConcept({image, title, description}) {
        return (
            <li>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        )
    }

# Storing Components in Files and Other Good Practices

Generally, components should reside in their own files, unless, perhaps, if the two components are very very close in purpose. Generally, components will go into the `components` folder, under `src`. File names should sync with the component name (e.g. `Header.jsx`). Similarly, CSS for each of these componenets can be stored in a similarly named CSS file, in the componenets folder (e.g. Header.css). This is then imported into the `Header.jsx` file. While this file is imported directly on the `jsx` file, if you use CSS classes or tags that are contained in that file, they will still apply globaly.

    import reactImg from '../assets/react-core-concepts.png';
    import './Header.css'

# The `children` Prop

React automatically passes a special prop named `children` to every custom component. The content between component opening and closing tags is used as a value for the special "children" prop.

# Reacting to Events

In react, you add eventListeners to elements using a special prop. There are a large number of props available to us here. In this instance, we are using the `onClick` prop. When using the `onClick` prop, make sure not to use `()`, as this will cause the function to run when the element is created.

    function handleClick() {
        console.log('poop')
    }

    <button onClick={handleClick}>{children}</button>

# Passing Function as Values to Props
You can configure the execution of a event-dependent function by wrapping the function with another function.

    onClick={ () => handleClick(5) }

# States and Hooks

React code usually only runs once. r