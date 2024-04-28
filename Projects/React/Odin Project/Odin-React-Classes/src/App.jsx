/* eslint-disable no-unused-vars */
import React, { Component } from "react";
// Can also be imported as: import React from 'react'
import "./App.css";

// Can also be rewritten with above as: class ClassInput extends React.Component {}
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                <form>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text" name="task-entry" />
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks!</h4>
                {/* The list of all the To-Do's, displayed */}
                <ul></ul>
            </section>
        );
    }
}

export default App;
