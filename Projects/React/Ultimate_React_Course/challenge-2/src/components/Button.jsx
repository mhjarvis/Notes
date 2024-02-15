/* eslint-disable react/prop-types */

export default function Button({ clicker, data }) {
    return (
        <button className="button" onClick={clicker}>
            {data}
        </button>
    );
}
