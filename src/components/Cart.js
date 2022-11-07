import React from "react";
import CartItem from "./CartItem";
import { UsarCarritoContexto } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

	const {vaciarCarrito,totalPrecioCarrito,carrito} = UsarCarritoContexto();

	return (
		<>
		<h1>Carrito:</h1>
		<div className="container">
			<div className="row">
				<div className="col">
					{carrito.map((item)=> <CartItem key={item.id} item={item}/> )}
				</div>
				<div className="col">
					<p><b>TOTAL: $</b>{totalPrecioCarrito(carrito)}</p>
						<Link to='/checkout'><button>FINALIZAR COMPRA</button></Link>
						<button onClick={vaciarCarrito}>VACIAR CARRITO</button>
						<Link to='/'><button>VOLVER A TIENDA</button></Link>
				</div>
			</div>
		</div>
	</>
	);
};

export default Cart;
