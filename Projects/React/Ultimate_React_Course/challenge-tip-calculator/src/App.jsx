import "./App.css";

function App() {
    return (
        <>
            <BillInput />
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

export default App;
