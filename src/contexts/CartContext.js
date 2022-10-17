import React, {useState} from "react";
export const CarrritoContexto = React.createContext([]);


const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () => setCarrito([]);

	return (
        <CarrritoContexto.Provider value='Maverick'>
            {children} 
        </CarrritoContexto.Provider>
)};

export default CarritoProvider;
