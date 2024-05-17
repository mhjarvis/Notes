/* eslint-disable react/prop-types */

import { useState } from "react";
import "./App.css";

function App() {
    const [bill, setBill] = useState(0);

    return (
        <>
            <BillInput bill={bill} setBill={setBill} />
            <ServiceInput text="How did you like the service? ">
                <input className="input" type="text"></input>
            </ServiceInput>
            <ServiceInput text="How did your friend like the serivce? ">
                <input className="input" type="text"></input>
            </ServiceInput>
            <Output />
            <Button />
        </>
    );
}

function BillInput({ bill, setBill }) {
    function updateBillInput(e) {
        setBill(e.target.value);
    }

    return (
        <div className="container">
            <p>How much was the bill? </p>
            <input
                className="input"
                type="text"
                value={bill}
                onChange={() => updateBillInput(event)}
            />
        </div>
    );
}

function ServiceInput({ text, children }) {
    return (
        <div className="container">
            <p>{text}</p>
            {children}
        </div>
    );
}

function Output() {
    return <p>`You pay $$ ($$ + $$ tip)`</p>;
}

function Button() {
    return <button>Reset</button>;
}

export default App;
