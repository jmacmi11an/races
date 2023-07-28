import { useState } from "react";
import "../styles/Dropdown.css";

function Dropdown({onChange, raceType}) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
        onChange(event.target.value);
    };

    return <div className="dropdown">
        <h3>Select race type</h3>
        <select className="dropdown-select" value={value} onChange={handleChange}>
            <option value="all">All</option>
            <option value="greyhound">Greyhound</option>
            <option value="harness">Harness</option>
            <option value="horse">Horse</option>
        </select>
    </div>
}

export default Dropdown