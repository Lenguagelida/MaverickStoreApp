import Item from "./Item";
import React from "react";

const ItemList = ({catalogo}) => {
	return(
        catalogo.map((maqueta)=> <Item key={maqueta.id} info={maqueta}></Item>)
    );
};

export default ItemList;
