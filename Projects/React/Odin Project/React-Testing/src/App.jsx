import { useState } from "react";

export default function App() {
    const [heading, setHeading] = useState("Magnificent Monkeys");

    const clickHandler = () => {
        setHeading("Radical Rhinos");
    };

    return (
        <div style={styles}>
            <button onClick={clickHandler}>Click Me</button>
            <h1>{heading}</h1>
        </div>
    );
}

const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
};
