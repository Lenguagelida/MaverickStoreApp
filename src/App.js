import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CarritoProvider from './contexts/CartContext';

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
          </Routes>
      </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
