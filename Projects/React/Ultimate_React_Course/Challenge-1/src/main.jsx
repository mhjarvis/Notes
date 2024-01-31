/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Lang(props) {
    return (
        <div className={props.divClass}>
            <p className={props.className}>{props.name}</p>
            <p className="emoji">{props.emoji}</p>
        </div>
    );
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
            <div className="all-tags">
                <Lang
                    name="HTML+CSS"
                    divClass="blue tag-container"
                    className="tag"
                    emoji="💪"
                />
                <Lang
                    name="JavaScript"
                    divClass="yellow tag-container"
                    className="tag"
                    emoji="👶"
                />
                <Lang
                    name="Web Design"
                    divClass="red tag-container"
                    className="tag"
                    emoji="💪"
                />
                <Lang
                    name="Git and Github"
                    divClass="light-blue tag-container"
                    className="tag"
                    emoji="💪"
                />
                <Lang
                    name="React"
                    divClass="green tag-container"
                    className="tag"
                    emoji="💪"
                />
                <Lang
                    name="Node"
                    divClass="blue tag-container"
                    className="tag"
                    emoji="💪"
                />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
);
