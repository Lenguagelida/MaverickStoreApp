import  {createContext, useContext, useState} from "react";

const CarrritoContexto = createContext();
export const UsarCarritoContexto = () => useContext(CarrritoContexto);

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () => setCarrito([]);
    //Limpia el carrito vaciando el array del estado

    const estaEnCarrito = (id) => carrito.some(producto => producto.id === id);
    //Devuelve true o false si existe el producto en el carrito

    const agregarCarrito = (producto,cantidad) => {
        if (estaEnCarrito(producto.id)){
            setCarrito(carrito.map(item =>{
                console.log(`Modificaste la cantidad de ${producto.nombre} y agregaste ${cantidad} mas.`); //CAMBIAR A TOASTIFY
                console.log("la nueva cantidad: ", item.cantidad + cantidad);
                return item.id === producto.id ? {...producto, cantidad: item.cantidad + cantidad}: item 
                //Agrega al carrito con  la cantidad modificada 
            }));
        }else{
            let nuevoProducto = {...producto,cantidad};
            const carritoActualizado = [...carrito, nuevoProducto];
            setCarrito(carritoActualizado);
            //Agrega al carrito solo si no esta en el carrito
        };
    };
    console.log("El carrito: " , carrito);

    const removerDelCarrito = (id) => setCarrito(carrito.filter(item => item.id !== id));
    //Filter me devuelve otro array sin el item que elegi remover y lo guardo en el estado
    
	return (
        <CarrritoContexto.Provider value={{vaciarCarrito, estaEnCarrito, agregarCarrito, removerDelCarrito, carrito, setCarrito}}>
            {children} 
        </CarrritoContexto.Provider>
)};
