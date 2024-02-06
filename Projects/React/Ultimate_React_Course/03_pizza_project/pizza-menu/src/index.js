import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

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
    const pizzas = pizzaData;
    const numOfPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {/*             {pizzas && ( */}
            {numOfPizzas > 0 ? (
                <React.Fragment key="fragment">
                    {" "}
                    {/* this is a react fragment and leaves no DOM choice 
                React.Fragment is only needed if adding a key */}
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>We're still working on our menu, please come back later</p>
            )}

            {/*             <Pizza
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
            <Pizza /> */}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    /*     if (pizzaObj.soldOut) return null;
     */ return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                {/* YOU COULD ALSO DO:
                {pizzaObj.soldOut ? (
                    <span>Sold Out</span>) : (
                        <span>{pizzaObj.price)</span>}
                )}
            */}

                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    /*     if(!isOpen) return <p>CLOSED</p>;    */

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>We are not open!</p>
            )}
        </footer>
    );

    // if we were to write it all out without the use of Babel, we would need to write:
    // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We are open from {openHour}:00 to {closeHour}:00.
            </p>
            <button className="btn">Order</button>
        </div>
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
