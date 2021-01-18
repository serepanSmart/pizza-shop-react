import React, { useState, useEffect } from 'react';
import ButtonElement from './../../elements/ButtonElement/ButtonElement';
import InputElement from './../../elements/inputElement/InputElement';
import compositionList from './../../data/compositionList';
import { Link } from 'react-router-dom';

class createPizzaModel {
    constructor({ img, name, composition, price, caloricity }) {
        this.id = listOfCustomPizzas.length + 1;
        // this.img = img;
        this.name = '';
        this.composition = pizzaModel.composition;
        this.price = price;
        this.caloricity = caloricity;
        this.isNew = true;
        this.getName(name)
        this.getCompositionsName(composition)
    }

    getName(name) {
        name = name.toLowerCase().split('');
        name[0] = name[0].toUpperCase();
        this.name = name.join('');
    }
    getCompositionsName(compositions) {
        this.composition = compositionList.filter(el => {
            return compositions.includes(el.id);
        }).map(el => el.name)
    }
}

let listOfCustomPizzas = JSON.parse(localStorage.getItem('listOfCustomPizzas')) || [];

const pizzaModel = {
    id: 0,
    img: '',
    name: '',
    composition: [],
    price: 100,
    caloricity: 1000,
}

const CreatePizza = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [caloricity, setCaloricity] = useState(0);
    const [img, setImg] = useState("https://cdn2.iconfinder.com/data/icons/creative-15/64/pizza-Italian-food-fast-food-512.png");

    const addIngredient = (e) => {
        if (e.target.checked) {
            pizzaModel.composition.push(e.target.value);
            pizzaModel.price += compositionList[e.target.id - 1].price;
            setTotalPrice(pizzaModel.price)
            pizzaModel.caloricity += compositionList[e.target.id - 1].caloricity;
            setCaloricity(pizzaModel.caloricity)
        }
        if (!e.target.checked) {
            pizzaModel.composition.splice(e.target, 1);
            pizzaModel.price -= compositionList[e.target.id - 1].price;
            setTotalPrice(pizzaModel.price)
            pizzaModel.caloricity -= compositionList[e.target.id - 1].caloricity;
            setCaloricity(pizzaModel.caloricity)
        }
        console.log(pizzaModel.composition)
    }


    const setNameOfPizza = (e) => {
        pizzaModel.name = e.target.value
    }

    const createCustomPizza = () => {
        let newPizza = { ...pizzaModel };
        listOfCustomPizzas.push(newPizza);
        localStorage.setItem('listOfCustomPizzas', JSON.stringify(listOfCustomPizzas));
    }

    const clearCustomPizzas = () => {
        listOfCustomPizzas = [];
        localStorage.setItem('listOfCustomPizzas', JSON.stringify(listOfCustomPizzas));
        window.location.reload();
    }

    const addPizzaImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setImg(fileReader.result);
        };
        fileReader.readAsDataURL(file);
        console.log(e.target.files)
    }


    return (
        <div className="create__pizza">
            <div className="container">
                <div className="inputs">
                    <div className="inputs__checkbox">

                        {
                            compositionList.map(pizza => {
                                return (
                                    <InputElement key={pizza.id} type="checkbox" id={pizza.id} value={pizza.name} htmlFor={pizza.id} label={pizza.name} onInput={addIngredient} />
                                )
                            })
                        }
                        <InputElement type="text" placeholder="Введите свое название" onInput={setNameOfPizza} />
                    </div>

                    <InputElement type="file" onInput={addPizzaImage} />
                    <div className="inputs__img"><img src={img} alt="" /></div>
                </div>
                <div><h1> Total price: {pizzaModel.composition.length ? totalPrice : 0} грн.</h1></div>
                <div><h1> Total caloricity: {pizzaModel.composition.length ? caloricity : 0} cal</h1></div>
                <ButtonElement className="button" type="submit" title="Cоздать" onClick={createCustomPizza} />
                <ButtonElement className="button" title="Удалить все" onClick={clearCustomPizzas} />
                <Link to='/' className="button">В магазин</Link>
            </div>
        </div>
    )
}

export default CreatePizza;