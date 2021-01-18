import React from 'react';
import '../scss/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CartIcon = ({ count }) => {

    return (
        <>
            <Link to='/Cart' className="cart"></Link>
            <span className="cart_count">{count}</span>
        </>
    )
}

export default CartIcon;