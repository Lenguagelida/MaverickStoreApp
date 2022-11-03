import React,{useState} from "react";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { UsarCarritoContexto } from "../context/CartContext";

const Checkout = () => {

    const {totalPrecioCarrito, carrito} = UsarCarritoContexto();
    const [infoComprador, setInfoComprador]= useState({});
    const [ordenDeDompra, setOrdenDeCompra]= useState({});

    const capturarInfo = (e) => {
        const {name, value} = e.target;
        setInfoComprador({...infoComprador, [name]:value});
    };

    const enviarOrden = (e)=>{
        e.preventDefault();
        let precioTotal = "AR$"+ totalPrecioCarrito(carrito);
        let infoProductos = carrito.map(item =>({id:item.id, nombre:item.nombre, marca:item.marca, precio:item.precio, cantidad:item.cantidad}))
        setOrdenDeCompra({items:{...infoProductos}, buyer:{...infoComprador}, total:precioTotal});

        const db = getFirestore();
        const ordenesColleccion = collection(db,'ordenes');
        addDoc(ordenesColleccion, ordenDeDompra)
            .then(({id}) => console.log(id));
        // if ({nombre:''}){
        //     return console.log('faltan datos');
        // }else{
        //     return console.log(infoComprador);
        // }
        console.log("Info comprador: ",infoComprador); 
        console.log("El carrrito: ", infoProductos);     
        console.log("La orden: ",ordenDeDompra);
        
    };

    
	return(
        <>
            <div className="container">
                <h2>Datos de compra</h2>
            </div>
            <form className="container p-5">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput1" name="nombre" placeholder="Nombre"
                        onChange={capturarInfo} required/>
                        <label htmlFor="floatingInput1">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="floatingInput2" name="telefono" placeholder="01112345678"
                        onChange={capturarInfo} required/>
                        <label htmlFor="floatingInput2">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput4" name="direccion" placeholder="Dirección"
                        onChange={capturarInfo} required/>
                        <label htmlFor="floatingInput4">Dirección</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput3" name="email" placeholder="name@example.com"
                        onChange={capturarInfo} required/>
                        <label htmlFor="floatingInput3">Email</label>
                </div>
                <div>
                    <button onClick={enviarOrden}>Enviar Orden</button>
                </div>                
            </form>
        </>
)};

export default Checkout;
