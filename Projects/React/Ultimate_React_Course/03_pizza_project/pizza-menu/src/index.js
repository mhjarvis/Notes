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
                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
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


function Pizza(props) {

    if(props.pizzaObj.soldOut) return null;

    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
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
                <div className="order">
                    <p>


                        
                        We're open until {closeHour}:00. Come visit us or order
                        online.
                    </p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>We are not open!</p>
            )}
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
