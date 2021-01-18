import React from 'react';
import './../../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from '../../components/CartIcon';
import { Link } from 'react-router-dom';



const Header = ({ count, setCount, arrOfPizzas }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="images/pizzeria-logo.png" alt="" />
                </div>
                <div>
                    <Link to='/CreatePizza' className='button'>Собери свою пиццу сам</Link>
                </div>
                <CartIcon
                    arrOfPizzas={arrOfPizzas}
                    count={count}
                    setCount={setCount}
                />
            </div>
        </header>
    )
}

export default Header;
