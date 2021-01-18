import React, { useState, useRef } from 'react';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';
import promo from '../../data/promocodesList';
import { Link } from 'react-router-dom';

const Cart = () => {

    let productsArr = JSON.parse(localStorage.getItem('productsArr')) || [];
    let count = productsArr.length;
    let productsPrice = JSON.parse(localStorage.getItem('productsPrice')) || [];
    let totalPrice = productsPrice.length ? productsPrice.reduce((a, b) => a + b) : 0;

    const [total, setTotal] = useState(totalPrice);
    const [currentPizza, setCurrentPizza] = useState({ ...productsArr[0] })

    const inputPromo = useRef();
    const btnPromo = useRef();

    const removeFromCart = (e) => {
        setCurrentPizza(e.target);
        totalPrice -= currentPizza.price;
        productsPrice.splice(currentPizza, 1);
        productsArr.splice(currentPizza, 1);
        if (count > 0) {
            --count
        } else count = 0;
        localStorage.setItem('productsPrice', JSON.stringify(productsPrice))
        localStorage.setItem('productsArr', JSON.stringify(productsArr))
        localStorage.setItem('count', JSON.stringify(count))
    }

    const usePromo = () => {
        let value = +inputPromo.current.value;

        if (promo.find(val => val === value)) {
            setTotal(Math.floor(totalPrice * 0.85));
            localStorage.setItem('totalPrice', JSON.stringify(Math.floor(totalPrice * 0.85)))
            btnPromo.current.disabled = 'true';
        };

    };

    return (
        <div className="cart__order">
            <div className="container">
                <div className="cart__order_title">
                    <h1>Ваши покупки</h1>
                </div>
                <div className="row">
                    {[...productsArr].map((pizza, index) => {
                        return (
                            <div className="pizza__item-wrapper col-12 col-sm-6 col-md-4 col-lg-3" key={index + 22}>
                                <div className="pizza__item">
                                    <h3>{pizza.name}</h3>
                                    <div className="pizza__item-img">
                                        <img src={pizza.img} alt="pizza" />
                                    </div>
                                    <h5>{pizza.price} грн.</h5>
                                    <div className="button_element">
                                        <ButtonElement
                                            onClick={removeFromCart}
                                            title='Убрать из корзины'
                                        />

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <input type="text" ref={inputPromo} placeholder="Введите промокод" />
                    <button className="button" onClick={usePromo} ref={btnPromo}>Использовать промокод</button>
                </div>
                <div className="total_count">
                    <h1>Общее количество: {count}</h1>
                </div>
                <div className="total_price">
                    <h1>Общая сумма: {total}</h1>
                </div>
                <div className="links">
                    <Link to="/" className="button">В магазин</Link>
                    <Link to="/Customer" className="button">Далее</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;