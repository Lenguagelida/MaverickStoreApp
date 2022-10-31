import React from 'react'
import { Link } from 'react-router-dom';
import { UsarCarritoContexto } from "../context/CartContext";

const CartWidget = () => {
    
    const {totalItemsCarrito, totalPrecioCarrito, carrito} = UsarCarritoContexto();
    console.log("Items en el carrito: ",totalItemsCarrito(carrito));
    console.log("Precio total del carrito: ", totalPrecioCarrito(carrito));
    return (
        <Link to='/cart'>
            <button className="btn btn-outline-light mx-1">
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">{totalItemsCarrito(carrito)} - Total : ${totalPrecioCarrito(carrito)}</span>
            </button>
        </Link>
    );
};

export default CartWidget
