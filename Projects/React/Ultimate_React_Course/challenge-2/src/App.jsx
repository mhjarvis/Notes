/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(1);

    

    return (
        <div>
            <div className="step">
                <Button innerText="+"></Button>
                <p>Step: {step}</p>
                <Button innerText="-"></Button>
            </div>
            <div className="count">
                <Button innerText="+"></Button>
                <p>Count: {count}</p>
                <Button innerText="-"></Button>
            </div>
            <div>
                <p>{step} days from today is NEED DATE </p>
            </div>
        </div>
    );
}

function Button(props) {
    return <button className="button">{props.innerText}</button>;
}
