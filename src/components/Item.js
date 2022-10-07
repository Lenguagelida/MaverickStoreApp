import React from "react";

const Item = ({info}) => {
	return(
        <div className="card_container col">
					<div className="card h-100">
						<img src={info.image} className="card-img-top" alt={info.nombre}/>
						<div className="card-body">
							<h4 className="card-title text-center">{info.nombre}</h4>
							<p className="card-text text-center">{info.marca}</p>
							<p className="card-text text-center">Escala: {info.escala}</p>
							<p className="card-text text-center fw-bolder">Precio: ${info.precio}</p>
						</div>
							<a  id="agregar-carrito${info.id}" className="btn btn-outline-primary m-1 fw-bolder"><i className="bi-cart-fill me-1"></i> Añadir al carrito</a>
							<a  id="agregar-favorito${info.id}" className="btn btn-outline-secondary m-1 fw-bolder"><i className="bi bi-star-fill"></i> Agregar a favoritos</a>
						<div className="card-footer">
							<small className="text-success">Hay stock</small>
						</div>
					</div>
				</div>
    );
};

export default Item;
