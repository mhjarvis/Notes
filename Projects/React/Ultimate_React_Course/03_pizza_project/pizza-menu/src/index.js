import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <>
            <h1>Hello React!</h1>
            <Pizza />
        </>
    );
}

function Pizza() {
    return (
        <>
            <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// React.render(<App />, document.getElementById("root"))
