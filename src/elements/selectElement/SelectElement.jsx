import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SelectElement = ({ id, label, value1, value2, value3, onChange, }) => {

    return (
        <div className="select" onChange={(e) => onChange(e)}>
            <label htmlFor={id}> {label} </label>
            <select id={id}>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
            </select>
        </div>

    )
}

export default SelectElement;