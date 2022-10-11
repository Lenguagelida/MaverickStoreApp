import React from "react";

const ItemDetail = ({item}) => {
	return(
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.image} alt={item.nombre} /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">ID: {item.id}</div>
                            <h1 className="display-5 fw-bolder">{item.nombre}</h1>
                            <div className="fs-5 mb-5">
                                <span>Escala: {item.escala} </span>
                                <hr></hr>
                                <span>Precio: ${item.precio}</span>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemDetail;
