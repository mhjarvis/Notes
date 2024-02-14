import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
        <Counter />
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
        </>
    );
}

function Counter() {
    return <div>Howdy</div>;
}

export default App;
