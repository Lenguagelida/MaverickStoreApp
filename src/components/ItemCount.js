import React,{useState} from "react";

export const ItemCount = ({cantInicial, stock, cantCarrito}) => {
    const [cantidad, setCantidad] = useState(cantInicial);

    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    const decrementar = () => {
        setCantidad(cantidad -1);
    }

    const funcOnClick = () =>{
        cantCarrito(cantidad);
    }
	return(
        <div className="d-flex">
            <div className="mx-1">
                <button className="btn btn-outline-primary flex-shrink-0" disabled={stock <=0} onClick={funcOnClick}>
                <i className="bi bi-cart-plus-fill"></i>
                    Agregar al carrito
                </button>
            </div>
            <div className="mx-1">
                <button onClick={decrementar} disabled={cantidad <=1} className="btn btn-outline-primary flex-shrink-0">-</button>
                <span className="mx-1"> {cantidad} </span>
                <button onClick={incrementar} disabled={cantidad >= stock} className="btn btn-outline-primary flex-shrink-0" >+</button>
            </div>
        </div>
    ); 

};

export default ItemCount;
