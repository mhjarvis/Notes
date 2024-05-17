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
        setFriendsService(0);
    }

    return (
        <>
            <BillInput bill={bill} setBill={setBill} />
            <ServiceInput setService={setService}>
                How did you like the service?{" "}
            </ServiceInput>
            <ServiceInput setService={setFriendsService}>
                how did your friend like the service?{" "}
            </ServiceInput>

            <Output
                bill={bill}
                service={service}
                friendsService={friendsService}
            />
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

function ServiceInput({ children, setService }) {
    function updateService(e) {
        setService(Number(e.target.value));
        console.log(e.target.value);
    }
    return (
        <div className="container">
            <p>{children}</p>
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

function Output({ bill, service, friendsService }) {
    const servicePercent = ((service + friendsService) / 2) * bill;
    const billTotal = servicePercent + bill;
    return (
        <p>
            You pay ${billTotal} (${bill} bill + ${servicePercent} tip)
        </p>
    );
}

function Button({ resetAll }) {
    return <button onClick={resetAll}>Reset</button>;
}

export default App;
