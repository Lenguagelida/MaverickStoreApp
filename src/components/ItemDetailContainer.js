import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem]= useState([]);
	const {itemId} = useParams();

	useEffect(()=>{
		const dbItem = getFirestore();
		const dbItemDoc = doc(dbItem, 'catalogo', itemId);
		getDoc(dbItemDoc)
			.then(response => setItem({id: response.id, ...response.data()}))
	},[itemId]);

	return(

		<ItemDetail item={item} />

	);
};

export default ItemDetailContainer;
