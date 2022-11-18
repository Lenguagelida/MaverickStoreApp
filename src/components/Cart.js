import React from "react";
import CartItem from "./CartItem";
import { UsarCarritoContexto } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

	const {vaciarCarrito,totalPrecioCarrito,totalItemsCarrito,carrito} = UsarCarritoContexto();


	return (
		<>
		{
			totalItemsCarrito(carrito) === 0 ? (
				<>
				<div className="d-flex justify-content-center p-5">
					<div className="col-auto text-center">
						<h2 className="p-5">Ups! El carrito esta vacio</h2>
						<Link to='/'><button className='btn btn-outline-primary flex-shrink-0'>VOLVER A TIENDA</button></Link>
					</div>
				</div>
			</>
		):		
		<>
			<h2 className='container'>Tu carrito:</h2>
			<div className="container">
				<div className="row">
					<div className="col">
						{carrito.map((item)=> <CartItem key={item.id} item={item}/> )}
					</div>
					<div className="col">
						<p><b>TOTAL: $</b>{totalPrecioCarrito(carrito)}</p>
							<Link to='/checkout'><button className='btn btn-outline-primary flex-shrink-0 mx-1'>FINALIZAR COMPRA</button></Link>
							<button className='btn btn-outline-primary flex-shrink-0 mx-1' onClick={vaciarCarrito}>VACIAR CARRITO</button>
							<Link to='/'><button className='btn btn-outline-primary flex-shrink-0 mx-1'>VOLVER A TIENDA</button></Link>
					</div>
				</div>
			</div>
		</>
		}
	</>
	);
};

export default Cart;
