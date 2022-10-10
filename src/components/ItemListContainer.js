import React, { useState, useEffect } from 'react'
import ListaCatalogo from '../maquetas.json'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([]);
    const {marcaId} = useParams();


    useEffect(()=>{
        const obtenerCatalogo = new Promise((resolve) => {
            resolve(ListaCatalogo)
        })
        if (marcaId) {
            obtenerCatalogo.then(res => {
                setCatalogo(res.lista.filter(maquetas => maquetas.marca === marcaId));
            });
        } else {
            obtenerCatalogo.then(res => {
                setCatalogo(res.lista);
            });
        }
    },[marcaId]);

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
