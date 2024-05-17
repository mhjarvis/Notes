/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import "./App.css";

function App() {
    const [bill, setBill] = useState(0);
    const [service, setService] = useState(0);
    const [friendsService, setFriendsService] = useState(0);

    function resetAll() {
        setBill(0);
        setService(0);
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
        setBill(Number(e.target.value));
    }

    return (
        <div className="container">
            <p>How much was the bill? </p>
            <input
                className="input"
                type="number"
                value={bill}
                onChange={() => updateBillInput(event)}
            />
        </div>
    );
}

function ServiceInput({ text, service, setService }) {
    function updateService(e) {
        setService(Number(e.target.value));
        console.log(e.target.value);
    }
    return (
        <div className="container">
            <p>{text}</p>
            <select
                className="input"
                type="picklist"
                onChange={() => updateService(event)}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value=".05">It was okay (5%)</option>
                <option value=".1">It was good (10%)</option>
                <option value=".20">It was Amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, service }) {
    return (
        <p>
            You pay ${bill + service * bill} (${bill} bill + ${service * bill}{" "}
            tip)
        </p>
    );
}

function Button({ resetAll }) {
    return <button onClick={resetAll}>Reset</button>;
}

export default App;
