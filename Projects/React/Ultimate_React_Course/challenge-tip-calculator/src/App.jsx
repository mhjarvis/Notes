/* eslint-disable react/prop-types */

import "./App.css";

function App() {
    return (
        <>
            <BillInput />
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

function BillInput() {
    return (
        <div className="container">
            <p>How much was the bill? </p>
            <input className="input" type="text" />
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
