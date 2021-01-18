import React from 'react';
import '../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonElement from '../elements/ButtonElement/ButtonElement';
import Modal from '../components/Modal';

const Pizza = ({ pizza, setCurrentPizza, count, setCount, onClick, isShowModal, setIsShowModal, currentPizza, arrOfPizzas }) => {
    let productsArr = JSON.parse(localStorage.getItem('productsArr')) || [];
    let productsPrice = JSON.parse(localStorage.getItem('productsPrice')) || [];
    count = productsArr.length;

    const addToCart = () => {
        setCurrentPizza(pizza);
        productsArr.push(pizza)
        productsPrice.push(pizza.price)
        localStorage.setItem('productsArr', JSON.stringify(productsArr))
        localStorage.setItem('productsPrice', JSON.stringify(productsPrice))
        localStorage.setItem('count', JSON.stringify(count))
        setCount(++count);
    }

    const showModal = () => {
        setCurrentPizza(pizza);
        setIsShowModal(!isShowModal)
    }

    return (
        <div className="pizza__item-wrapper col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="pizza__item" onClick={showModal}>

                <h3>{pizza.name}</h3>
                <div className="pizza__item-img">
                    <img src={pizza.img} alt="pizza" />
                </div>
                <h5>{pizza.price} грн.</h5>
                {
                    isShowModal && <Modal
                        isShowModal={isShowModal}
                        setIsShowModal={setIsShowModal}
                        currentPizza={currentPizza}
                        arrOfPizzas={arrOfPizzas}
                        pizza={pizza}
                    />
                }
                <div className="button_element">
                    <ButtonElement
                        onClick={addToCart}
                        title='В корзину'
                    />
                </div>
            </div>
        </div>
    )
}

export default Pizza;