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
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms"
                price={12}
                photoName="pizzas/funghi.jpg"
            />
            <Pizza />
            <Pizza />
            <Pizza /> 
            <Pizza />
        </main>
    );
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </div>
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
