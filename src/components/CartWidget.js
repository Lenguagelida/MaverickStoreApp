import React from 'react'

const CartWidget = () => {
    
    return (
            <button className="btn btn-outline-light mx-1">
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">0 - Total : $0</span>
            </button>
    );
};

export default CartWidget
