/* eslint-disable no-unused-vars */
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
