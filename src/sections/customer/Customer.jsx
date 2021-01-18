import React from 'react';
import InputElement from '../../elements/inputElement/InputElement';
import { Link } from 'react-router-dom';

const Customer = () => {

    const orderInfo = {
        fullName: '',
        email: '',
        tel: +'',
        address: {
            organization: '',
            city: 'Харьков',
            street: '',
            house: '',
        },
        typeOfDelivery: 'Курьер'
    };

    const setName = e => {
        orderInfo.fullName = e.target.value;
    }

    const setEmail = e => {
        orderInfo.email = e.target.value;
    }

    const setTel = e => {
        orderInfo.tel = e.target.value;
    }

    const toStorage = () => {
        localStorage.setItem('orderInfo', JSON.stringify(orderInfo))
    }

    return (
        <div className="customer">
            <div className="container">
                <h3>Скажите, кому везем пиццу))</h3>
                <form action="#">
                    <InputElement
                        onInput={setName}
                        type="text"
                        placeholder="Введите свое имя"
                        id={orderInfo.fullName}
                    />

                    <InputElement
                        onInput={setEmail}
                        type="email"
                        placeholder="Введите свою почту"
                        id={orderInfo.email}
                    />

                    <InputElement
                        onInput={setTel}
                        type="number"
                        placeholder="Введите свой номер телефона"
                        id={orderInfo.tel}
                    />
                    <button type="reset" className="button">Очистить</button>
                </form>
                <div className="links">
                    <Link to="/Cart" className="button">Вернуться</Link>
                    <Link to="/Address" className="button" onClick={toStorage}>Далее</Link>
                </div>
            </div>
        </div>
    )
}

export default Customer;