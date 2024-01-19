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
