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
React allows you to pass data to components via a concept called "Props". This allows you to reuse componenets but with different text or content. When using the ```props``` parameter, a object will be sent to it containing the values needed for the function to work.

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

We can also destructure the props object using ```{}```:

    function CoreConcept({image, title, description}) {
        return (
            <li>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        )
    }