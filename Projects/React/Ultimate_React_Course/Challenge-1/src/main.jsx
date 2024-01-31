import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Lang(props) {
    return <></>;
}

function Container() {
    return (
        <div className="container">
            <img src="src/assets/jonas.jpeg" className="jonas" />
            <h1>Jonas Schmedtmann</h1>
            <p>
                Full-stack web developer and teacher at Udemy. When not coding
                oro preparing a course, I like to play board games, to cook and
                eat, or to just enjoy the Portuguese sun at the beach.
            </p>
            <div>
                <Lang />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
);
