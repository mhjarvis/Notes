import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={5}
            messages={["terrible", "bad", "good", "poop", "poo"]}
        />
        <StarRating
            size={24}
            color="red"
            className="test"
            defaultRating={2}
        ></StarRating>
    </React.StrictMode>
);
