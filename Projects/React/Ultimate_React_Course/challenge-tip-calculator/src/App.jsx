import "./App.css";

function App() {
    return (
        <>
            <BillInput />
            <ServiceInput text="How did you like the service? " />
            <ServiceInput text="How did your friend like the serivce? " />
        </>
    );
}

function BillInput() {
    return (
        <div className="bill-input-container">
            <p>How much was the bill? </p>
            <input type="text" />
        </div>
    );
}

function ServiceInput({ text }) {
    return (
        <div className="service-input-container">
            <p>{text}</p>
        </div>
    );
}

export default App;
