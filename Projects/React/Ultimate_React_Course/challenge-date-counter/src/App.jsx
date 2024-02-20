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
    //const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [range, setRange] = useState(1);

    let date = new Date();
    date.setDate(date.getDate() + count);

    // Step variable
    /*     function handlePreviousStep() {
        if (step > 1) {
            setStep(step - 1);
        }
    }
    function handleNextStep() {
        if (step < 10) {
            setStep(step + 1);
        }
    } */
    // Count variable
    function handleNextCount() {
        setCount(Number(count) + Number(range));
        /* if (count < 10000000) {
            setCount(count);
        } */
    }
    function handlePreviousCount() {
        if (count > 0) {
            setCount(count - range);
        }
    }

    function handleCountChange(e) {
        setCount(e);
        date = new Date();
        date.setDate(date.getDate() + count);
    }

    return (
        <div>
            <div className="step">
                {/* RANGE COUNTER */}
                <div className="range-counter">
                    <input
                        type="range"
                        step={1}
                        min="1"
                        max="10"
                        value={range}
                        onChange={(e) => setRange(Number(e.target.value))}
                    />
                    <p>{range}</p>
                </div>
                {/*
                <Button data="-" clicker={handlePreviousStep}></Button>
                <p>Step: {step}</p>
                <Button data="+" clicker={handleNextStep}></Button> 
                */}
            </div>
            <div className="count">
                <Button data="-" clicker={handlePreviousCount}></Button>
                <input
                    type="text"
                    value={count}
                    min="1"
                    max="10000000"
                    onChange={(e) => handleCountChange(Number(e.target.value))}
                />
                <Button data="+" clicker={handleNextCount}></Button>
            </div>
            <div>
                {count == 0 ? (
                    <p>Today is {date.toDateString()}</p>
                ) : (
                    <p>
                        {count} days from today is {date.toDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}
