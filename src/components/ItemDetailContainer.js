import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ListaCatalogo from '../maquetas.json'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem]= useState([]);
	const {itemId} = useParams();

	useEffect(()=>{
        const obtenerCatalogo = new Promise((resolve) => {
            resolve(ListaCatalogo);
        });
		obtenerCatalogo.then(res => setItem(res.lista.find(maqueta=> maqueta.id === parseInt(itemId))));
	},[]);

	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
