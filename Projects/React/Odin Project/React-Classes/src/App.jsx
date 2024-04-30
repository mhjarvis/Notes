/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
    return <ClassInput name="John Wick" />;
}

class ClassInput extends React.Component {
    // props that are passed into this component get passed into the classes contructor
    constructor(props) {
        super(props);

        // state is initialized in the constructor
        this.state = {
            todos: [],
            inputVal: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value,
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            todos: state.todos.concat(state.inputVal),
            inputVal: "",
        }));
    }

    deleteElement(e) {
        const index = e.target.value;
        let arr = [...this.state.todos];
        arr.splice(index, 1);
        this.setState((state) => ({
            todos: arr,
            inputVal: state.inputVal,
        }))
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input
                        type="text"
                        name="task-entry"
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks!</h4>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <div key={index}>
                            <li>{todo}</li>
                            <button
                                value={index}
                                type="submit"
                                onClick={this.deleteElement}
                            >
                                Delete this
                            </button>
                        </div>
                    ))}
                </ul>
            </section>
        );
    }
}

export default App;

/* const FunctionalInput = ({ name }) => {
    const [todos, setTodos] = useState([
        "Just some demo tasks",
        "As an example",
    ]);
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((todo) => [...todo, inputVal]);
        setInputVal("");
    };

    return (
        <section>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task-entry">Enter a task: </label>
                <input
                    type="text"
                    name="task-entry"
                    value={inputVal}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </section>
    );
};
 */
