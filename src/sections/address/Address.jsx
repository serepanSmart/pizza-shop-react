import React from 'react';
import InputElement from '../../elements/inputElement/InputElement';
import SelectElement from '../../elements/selectElement/SelectElement';
import { Link } from 'react-router-dom';

const Address = () => {

    const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) || [];

    const setOrg = e => {
        orderInfo.address.organization = e.target.value;
    }

    const setCity = e => {
        orderInfo.address.city = e.target.value;
    }

    const setStreet = e => {
        orderInfo.address.street = e.target.value;
    }

    const setHouse = e => {
        orderInfo.address.house = e.target.value;
    }
    const setDelivey = e => {
        orderInfo.typeOfDelivery = e.target.value;
    }


    const toStorage = () => {
        localStorage.setItem('orderInfo', JSON.stringify(orderInfo))
    }

    return (
        <div className="address">
            <div className="container">
                <h3>Укажите адрес доставки</h3>
                <form action="#">
                    <InputElement
                        onInput={setOrg}
                        type="text"
                        placeholder="Организация"
                        id={orderInfo.address.organization}
                    />

                    <InputElement
                        onInput={setCity}
                        type="email"
                        placeholder="Город"
                        id={orderInfo.address.city}
                    />

                    <InputElement
                        onInput={setStreet}
                        type="text"
                        placeholder="Улица"
                        id={orderInfo.address.street}
                    />
                    <InputElement
                        onInput={setHouse}
                        type="text"
                        placeholder="Дом №..."
                        id={orderInfo.address.house}
                    />
                    <SelectElement
                        onChange={setDelivey}
                        value1='Курьер'
                        value2='Самовывоз'
                        value3='Новая почта'
                    />
                    <button type="reset" className="button">Очистить</button>
                </form>
                <div className="links">
                    <Link to="/Customer" className="button">Вернуться</Link>
                    <Link to="/ReadyOrder" className="button" onClick={toStorage}>Далее</Link>
                </div>
            </div>
        </div>
    )
}

export default Address;