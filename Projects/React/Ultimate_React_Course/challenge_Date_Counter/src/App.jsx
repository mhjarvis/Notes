/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count * step);

    // Step variable
    function handlePreviousStep() {
        if (step > 1) {
            setStep(step - 1);
        }
    }
    function handleNextStep() {
        if (step < 10) {
            setStep(step + 1);
        }
    }
    // Count variable
    function handleNextCount() {
        if (count < 30) {
            setCount(count + 1);
        }
    }
    function handlePreviousCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div className="step">
                <Button data="-" clicker={handlePreviousStep}></Button>
                <p>Step: {step}</p>
                <Button data="+" clicker={handleNextStep}></Button>
            </div>
            <div className="count">
                <Button data="-" clicker={handlePreviousCount}></Button>
                <p>Count: {count}</p>
                <Button data="+" clicker={handleNextCount}></Button>
            </div>
            <div>
                {count == 0 ? (
                    <p>Today is {date.toDateString()}</p>
                ) : (
                    <p>
                        {step * count} days from today is {date.toDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}
