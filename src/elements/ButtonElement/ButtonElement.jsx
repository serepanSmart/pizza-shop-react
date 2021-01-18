import React from 'react';

const ButtonElement = ({ title, onClick, type }) => {

    return (
        <button className="button" type={type} onClick={onClick}>{title}</button>
    )
}

export default ButtonElement;