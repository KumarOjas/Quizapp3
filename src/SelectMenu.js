import React from 'react';

const SelectMenu = () => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;

        // Redirect based on the selected value
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    };

    return (
        <div>
            <label htmlFor="menu">Choose an option:</label>
            <select id="menu" onChange={handleChange}>
                <option value="">--Select an option--</option>
                <option value="/">Home</option>
                <option value="/about">About</option>
                <option value="/contact">Contact</option>
            </select>
        </div>
    );
};

export default SelectMenu;
