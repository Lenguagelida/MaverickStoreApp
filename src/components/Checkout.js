import React,{useState} from "react";

const Checkout = () => {

    const infoOrden = {
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
    };

    const [infoComprador, setInfoComprador]= useState(infoOrden);

    const capturarInfo = (e) => {
        const {name, value} = e.target;
        setInfoComprador({...infoComprador, [name]:value});
    };

    const enviarOrden = ()=>{
        console.log(infoComprador);
    };

	return(
        <>
            <div className="container">
                <h2>Datos de compra</h2>
            </div>
            <div className="container p-5">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput1" name="nombre" placeholder="Nombre"
                        onChange={capturarInfo} required/>
                        <label htmlFor="floatingInput1">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="floatingInput2" name="telefono" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="01112345678"
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
            </div>
        </>
)};

export default Checkout;
