import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
    /* This function will serve as a pointer wherever it is used. In other words, this function will be passed to the TabButton.jsx file when one of the buttons is pressed, and will be executed based on the whatever onSelect is tied to. */
    function handleSelect() {
        console.log('poop - selected');
    }
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
                <section id="examples">
                  <h2>Examples</h2>
                  <menu>
                    <TabButton onSelect={handleSelect}>Components</TabButton>
                    {/* Could also use: <TabButton label='Components'></TabButton> */}
                    <TabButton onSelect={handleSelect}>JSX</TabButton>
                    <TabButton onSelect={handleSelect}>Props</TabButton>
                    <TabButton onSelect={handleSelect}>State</TabButton>
                  </menu>
                  Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
