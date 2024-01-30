import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    );
}

function Header() {
    return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
    return (
        <>
            <h2>Our menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    // const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer>
            {new Date().toLocaleTimeString()} - We're currently open
        </footer>
    );

    // if we were to write it all out without the use of Babel, we would need to write:
    // return React.createElement("footer", null, "We're currently open!");
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
// behind the scenes, Babel actually rewrites all components into similar javascript syntax as above
// using functions such as createElement(), etc.

// React before v18
// React.render(<App />, document.getElementById("root"))
