import React from "react";
import { UsarCarritoContexto } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

	const {vaciarCarrito, removerDelCarrito, subtotalPrecioProducto, totalPrecioCarrito, carrito} = UsarCarritoContexto();

	return (
		<>
			<h1>Carrito:</h1>
			<div>
				{carrito.map((item)=> <p key={item.id}><b>Nombre: </b>{item.nombre} <b>Cantidad: </b>{item.cantidad} <b>Subtotal: $</b> {subtotalPrecioProducto(item)}
					<button onClick={()=>removerDelCarrito(item.id)}>QUITAR</button>
				</p>)}
				<p><b>TOTAL: $</b>{totalPrecioCarrito(carrito)}</p>
			</div>
			<Link to='/checkout'><button>FINALIZAR COMPRA</button></Link>
			<button onClick={vaciarCarrito}>VACIAR CARRITO</button>
			<Link to='/'><button>VOLVER A TIENDA</button></Link>
		</>
		
	);
};

export default Cart;
