import React,{useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { UsarCarritoContexto } from "../context/CartContext";

const ItemDetail = ({item}) => {

    const [irCarrito, setIrCarrito] = useState(false);
    const {agregarCarrito} = UsarCarritoContexto();

    const cantidadCarrito = (cantidadItems) =>{
        setIrCarrito(true);
        agregarCarrito(item,cantidadItems)
        console.log(`Agregaste ${cantidadItems} unidades de ${item.nombre}`);
    };

	return(
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.image} alt={item.nombre} /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">ID: {item.id}</div>
                            <h1 className="display-5 fw-bolder">{item.nombre}</h1>
                            <div className="fs-5 mb-3">
                                <span>Escala: {item.escala} </span>
                                <hr/>
                                <span>Precio: ${item.precio}</span>
                            </div>
                            <p>{item.descripcion}</p>
                            {
                                irCarrito ? 
                                <Link to='/cart'>
                                    <button className="btn btn-outline-primary flex-shrink-0">
                                    <i className="bi bi-cart-check-fill me-1"></i>
                                    Ver carrito
                                    </button>
                                </Link> :
                                <ItemCount cantInicial={1} stock={20} cantCarrito={cantidadCarrito} />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemDetail;
