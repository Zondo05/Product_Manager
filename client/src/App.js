import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Details from './views/Details';
import EditProduct from './views/EditProduct';
import AllProducts from './views/AllProducts';
import NewProduct from './views/NewProduct';


function App(){

  return (
    <div className="App">

      <Router>
        <NewProduct path='product/new' />
        <AllProducts path ='/' />
        <Details path='/product/:id/details' />
        <EditProduct path = 'product/:id/edit' />
      </Router>

    </div>
  );
}

export default App;
