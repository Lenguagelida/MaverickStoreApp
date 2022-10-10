import React from "react";
import { Link } from "react-router-dom";

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
							<a className="btn btn-outline-primary m-1 fw-bolder"><i className="bi-cart-fill me-1"></i> Añadir al carrito</a>
							<a className="btn btn-outline-primary m-1 fw-bolder"><i className="bi bi-star-fill"></i> Agregar a favoritos</a>
							<Link to={`/detalle/${info.id}`} className="btn btn-outline-primary m-1 fw-bolder"><i className="bi bi-info-circle-fill"></i> Ver detalle</Link>
						<div className="card-footer">
							<small className="text-success">Hay stock</small>
						</div>
					</div>
				</div>
    );
};

export default Item;
