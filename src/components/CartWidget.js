import React from 'react'
import { Link } from 'react-router-dom';
const CartWidget = () => {
    
    return (
        <Link to='/cart'>
            <button className="btn btn-outline-light mx-1">
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">0 - Total : $0</span>
            </button>
        </Link>
    );
};

export default CartWidget
