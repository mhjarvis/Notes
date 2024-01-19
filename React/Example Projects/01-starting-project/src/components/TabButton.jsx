export default function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
        /* Could also use 'label' instead of props and props.children. */
    );
}
