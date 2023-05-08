import { useState } from "react";

function Dropdown({onChange, raceType}) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
        onChange(event.target.value);
    };

    return <div>
        <select value={value} onChange={handleChange}>
            <option value="all">All</option>
            <option value="greyhound">Greyhound</option>
            <option value="harness">Harness</option>
            <option value="horse">Horse</option>
        </select>
    </div>
}

export default Dropdown