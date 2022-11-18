import React from "react";
import { UsarCarritoContexto } from "../context/CartContext";

const CartItem = ({ item }) => {
	const { removerDelCarrito, subtotalPrecioProducto } = UsarCarritoContexto();

    const handleClick = (e) => {
        e.preventDefault();
        removerDelCarrito(item.id);
    }

	return (
            <div className="card mb-3" style={{maxWidth: 500}}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.nombre}/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="text-center fs-6">{item.nombre}</p>
                            <p className="text-center fs-6">Cantidad: {item.cantidad}</p>
                            <p className="text-center fs-6">Subtotal: ${subtotalPrecioProducto(item)}</p>
                            <button className='btn btn-outline-primary flex-shrink-0 mx-1'
                                onClick={handleClick}><i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CartItem;
