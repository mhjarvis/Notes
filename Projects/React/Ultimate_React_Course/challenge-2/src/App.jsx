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
    const [step, setStep] = useState(3);
    const [count, setCount] = useState(1);

    function handleNextStep() {
        if (step > 1) setStep(step - 1);
    }
    function handlePreviousStep() {
        if (step < 10) setStep(step + 1);
    }

    function handleNextCount() {}

    function handlePreviousCount() {}

    return (
        <div>
            <div className="step">
                <button className="button" onClick={handleNextStep}>-</button>
                <p>New Step: {step}</p>
                <button className="button" onClick={handlePreviousStep}>+</button>
                <Button
                    innerText="-"
                    clicker="handleNextStep"
                    onClick={handleNextStep}
                ></Button>
                <p>Step: {step}</p>
                <Button innerText="+" onClick={handlePreviousStep}></Button>
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
