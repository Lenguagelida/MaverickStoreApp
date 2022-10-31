import React from 'react';
import './firebase/firebaseConfig';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {CarritoProvider} from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <CarritoProvider>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/marcas/:marcaId' element={<ItemListContainer/>}/>
            {/* <Route exact path='/escalas' element={<ItemListContainer/>}/> */}
            <Route exact path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
          </Routes>
      </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
