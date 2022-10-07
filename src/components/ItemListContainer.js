import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';

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
                    <ItemList catalogo={catalogo}/>
                </div>
            </div>
        </section>
)
}

export default ItemListContainer
