export default function TabButton({ children, onSelect }) {
    return (
        <li>
            {/* onClick is being forwarded the handleSelect prop through the onSelect variable. It is receiving a pointer in this instance to the function declared in App.jsx. In this instance, we should read the below as: onClick={handleSelect} */}
            <button onClick={onSelect}>{children}</button>
        </li>
        /* Could also use 'label' instead of props and props.children. */
    );
}
