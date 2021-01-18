import React from 'react';
import { Link } from 'react-router-dom';

const ReadyOrder = () => {

    const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) || [];
    // let productsPrice = JSON.parse(localStorage.getItem('productsPrice')) || [];
    let totalPrice = JSON.parse(localStorage.getItem('totalPrice'));


    return (
        <div className="address">
            <div className="container">
                <h2>Ваш заказ: </h2>

                <h3>Ваше имя: {orderInfo.fullName}</h3>
                <h3>Ваша почта: {orderInfo.email}</h3>
                <h3>Ваш телефон: {orderInfo.tel}</h3>
                <h3>Организация: {orderInfo.address.organization}</h3>
                <h3>Город: {orderInfo.address.city}</h3>
                <h3>Улица: {orderInfo.address.street}</h3>
                <h3>Номер дома: {orderInfo.address.house}</h3>
                <h3>Способ доставки: {orderInfo.typeOfDelivery}</h3>
                <h3>Общая сумма: {totalPrice} грн.</h3>
                <button className="button">Заказать</button>

                <div className="links">
                    <Link to="/Address" className="button">Вернуться</Link>
                    <Link to="/" className="button">На главную</Link>
                </div>
            </div>
        </div>

    )
}

export default ReadyOrder;