/* eslint-disable no-unused-vars */
import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    // How to delete an element using filter()
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleSetItems() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                handleSetItems={handleSetItems}
                onDeleteItem={handleDeleteItem}
                onToggleItems={handleToggleItem}
            />
            <Stats items={items} />
        </div>
    );
}

function Logo() {
    return <h1>🤮 Far Away</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    // handle submit via the from element
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 🤮 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {/* Use Array.from and .map() to create a list of options for the select */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

function PackingList({ items, onDeleteItem, onToggleItems, handleSetItems }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItems={onToggleItems}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={handleSetItems}>Clear List</button>
            </div>
        </div>
    );
}

function Item({ item, onDeleteItem, onToggleItems }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItems(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❎</button>
        </li>
    );
}

function Stats({ items }) {
    // early return in case there are no items as of yet
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some tiems to your packing list</em>
            </p>
        );

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go!"
                    : `You have ${numItems} items on your list, and you already packed
                ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
