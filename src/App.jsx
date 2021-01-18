import React from 'react';
import './scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './sections/MainPage';
import Cart from './sections/cart/Cart';
import Customer from './sections/customer/Customer';
import Address from './sections/address/Address';
import ReadyOrder from './sections/readyOrder/ReadyOrder';
import CreatePizza from './sections/createPizza/CreatePizza';


const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/Cart' component={Cart} />
        <Route path='/Customer' component={Customer} />
        <Route path='/Address' component={Address} />
        <Route path='/ReadyOrder' component={ReadyOrder} />
        <Route path='/CreatePizza' component={CreatePizza} />
      </Switch>
    </div>
  );
}

export default App;
