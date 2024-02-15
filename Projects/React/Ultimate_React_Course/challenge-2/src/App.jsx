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

    // Step variable
    function handlePreviousStep() {
        if (step > 1) setStep(step - 1);
    }
    function handleNextStep() {
        if (step < 10) setStep(step + 1);
    }
    // Count variable
    function handleNextCount() {
        if (count < 10) setCount(count + 1);
    }
    function handlePreviousCount() {
        if (count > 1) setCount(count - 1);
    }

    return (
        <div>
            <div className="step">
                <button className="button" onClick={handlePreviousStep}>
                    -
                </button>
                <p>New Step: {step}</p>
                <button className="button" onClick={handleNextStep}>
                    +
                </button>
            </div>
            <div className="count">
                <button className="button" onClick={handlePreviousCount}>
                    -
                </button>
                <p>Count: {count}</p>
                <button className="button" onClick={handleNextCount}>
                    +
                </button>
            </div>
            <div>
                <p>{step} days from today is NEED DATE </p>
            </div>
        </div>
    );
}