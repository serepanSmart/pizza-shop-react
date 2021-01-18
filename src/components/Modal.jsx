import React from 'react';


const Modal = ({ currentPizza, isShowModal, setIsShowModal }) => {

    const closeModal = () => {
        setIsShowModal(!isShowModal)
    }
    return (
        <div className="modal" onClick={closeModal}>
            <h1>{currentPizza.name}</h1>
            <h4>Состав: {currentPizza.composition.join(', ')}</h4>
            <h4>{currentPizza.caloricity} cal</h4>
        </div>
    )
}

export default Modal;