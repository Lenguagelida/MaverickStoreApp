import React from "react";
import { Formik } from "formik";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { UsarCarritoContexto } from "../context/CartContext";

const Checkout = () => {

    const {totalPrecioCarrito, vaciarCarrito, carrito} = UsarCarritoContexto();

	return(
        <>
            <div className="container">
                <h2>Datos de compra</h2>
            </div>
            <Formik
                initialValues={{
                    nombre:"",
                    telefono:"",
                    direccion:"",
                    email:"",
                }}
                onSubmit={(infoComprador, {resetForm})=>{      
                    
                    let hoy = new Date();
                    let precioTotal = "AR$"+ totalPrecioCarrito(carrito);
                    let fecha = (hoy.getDate() + '/'+ (hoy.getMonth()+1) + '/'+ hoy.getFullYear());
                    let infoProductos = carrito.map(item =>({id:item.id, nombre:item.nombre, marca:item.marca, precio:item.precio, cantidad:item.cantidad}));
                    let ordenDeCompra = {operation_date:fecha, items:{...infoProductos},buyer:{...infoComprador},total:precioTotal};

                    const db = getFirestore();
                    const ordenesColleccion = collection(db,'ordenes');
                    addDoc(ordenesColleccion, ordenDeCompra)
                        .then(({id}) => console.log(id));

                    console.log(ordenDeCompra);
                    resetForm();
                    vaciarCarrito();
                    setTimeout(()=> window.location.replace("/"), 5000);                    
                }}
            >
                {({values, handleSubmit, handleChange, handleBlur})=>
                    <form className="container p-5" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="floatingInput1" 
                            name="nombre" 
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required/>
                            <label htmlFor="floatingInput1">Nombre:</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            type="tel" 
                            className="form-control" 
                            id="floatingInput2" 
                            name="telefono" 
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required/>
                            <label htmlFor="floatingInput2">Teléfono:</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="floatingInput4" 
                            name="direccion" 
                            value={values.direccion}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required/>
                            <label htmlFor="floatingInput4">Dirección:</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput3" 
                            name="email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required/>
                            <label htmlFor="floatingInput3">Email:</label>
                        </div>
                        <div>
                            <button type="submit">Enviar Orden</button>
                        </div>                
                    </form>
                }
            </Formik>
        </>
)};

export default Checkout;
