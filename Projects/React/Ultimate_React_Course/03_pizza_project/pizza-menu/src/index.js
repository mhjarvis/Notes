import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className={"container"}>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    /*     const style = {
        color: "red",
        fontSize: "4em",
        textTransform: "uppercase",
    }; */
    const style = {};
    return (
        <header className="header">
            <h1 style={style} className="header">
                Fast React Pizza Co.
            </h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </main>
    );
}

function Footer() {
    /*     const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour; */

    return (
        <footer className="footer">
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
            <h3>Pizza Spinaci</h3>
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
