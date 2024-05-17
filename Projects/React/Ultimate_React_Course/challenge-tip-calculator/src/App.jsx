/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import "./App.css";

function App() {
    const [bill, setBill] = useState(0);
    const [service, setService] = useState(null);

    function resetAll() {
        setBill(0);
        setService(null);
    }

    return (
        <>
            <BillInput bill={bill} setBill={setBill} />
            <ServiceInput
                text="How did you like the service? "
                service={service}
                setService={setService}
            />
            <ServiceInput
                text="how did your friend like the service? "
                service={service}
                setService={setService}
            />

            <Output bill={bill} service={service} />
            <Button resetAll={resetAll} />
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

function ServiceInput({ text, service, setService }) {
    return (
        <div className="container">
            <p>{text}</p>
            <select className="input" type="picklist">
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">It was Amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, service }) {
    return (
        <p>
            `You pay $$ ({bill} + {service * bill} tip)`
        </p>
    );
}

function Button({ resetAll }) {
    return <button onClick={resetAll}>Reset</button>;
}

export default App;
