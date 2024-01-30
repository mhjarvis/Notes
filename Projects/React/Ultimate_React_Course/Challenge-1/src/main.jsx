import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Container() {
    return (
        <div className="container">
            <h1>Jonas Schmedtmann</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
);
