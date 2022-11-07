import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([]);
    const {marcaId} = useParams();


    useEffect(()=>{
        const db = getFirestore();
        const dbCollection = collection(db, 'catalogo');
        if (marcaId) {
            const dbCollectionFilter = query(dbCollection, where('marca','==',marcaId))
            getDocs(dbCollectionFilter)
                .then(response => setCatalogo(response.docs.map(producto => ({id: producto.id, ...producto.data()}))));
        } else {
            getDocs(dbCollection)
            .then(response => setCatalogo(response.docs.map(producto => ({id: producto.id, ...producto.data()}))));
        }
    },[marcaId]);

    return (
        <section className="catalogo">
            <div className="container d-flex p-3">
                <div id="seccion-catalogo" className="row d-flex justify-content-center row-cols-1 row-cols-md-3 g-4">
                    <ItemList catalogo={catalogo}/>
                </div>
            </div>
        </section>
)
}

export default ItemListContainer
