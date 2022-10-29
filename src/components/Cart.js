import React from "react";
import { UsarCarritoContexto } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

	const {vaciarCarrito, removerDelCarrito, carrito} = UsarCarritoContexto();

	return (
		<>
			<h1>Carrito:</h1>
			<div>
				{carrito.map((item)=> <p key={item.id}>Nombre: {item.nombre} Cantidad: {item.cantidad}
					<button onClick={()=>removerDelCarrito(item.id)}>QUITAR</button>
				</p>)}
			</div>
			<button onClick={vaciarCarrito}>VACIAR CARRITO</button>
			<Link to='/'><button>VOLVER A TIENDA</button></Link>
		</>
		
	);
};

export default Cart;
