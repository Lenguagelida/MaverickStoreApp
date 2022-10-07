import React, { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([]);
    useEffect(()=>{
        fetch("./maquetas.json")
        .then(response => response.json()
        )
        .then(datos => {
            setCatalogo(datos.lista);
        })
    },[]);

    return (
        <section className="catalogo">
            <div className="container d-flex p-3">
                <div id="seccion-catalogo" className="row row-cols-1 row-cols-md-3 g-4">
                {catalogo.map((item)=>
                <div key={item.id}>
                    <h4>{item.nombre}</h4>
                    <div className='container p-3'>
                        <p>Imagen:</p>
                        <div className='container container-fluid'>
                            <img src={item.image} alt={item.id} width="350px" />
                        </div>
                        <hr></hr>
                    </div>
                </div>
                )}
                </div>
            </div>
        </section>
)
}

export default ItemListContainer
