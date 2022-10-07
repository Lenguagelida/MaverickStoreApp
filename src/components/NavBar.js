import React from 'react'
import CartWidget from './CartWidget'
import FavouriteWidget from './FavouriteWidget'
import LoginWidget from './LoginWidget'

const NavBar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container px-4 px-lg-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marcas</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Marca 1</a></li>
                                <li><a className="dropdown-item" href="#!">Marca 2</a></li>
                                <li><a className="dropdown-item" href="#!">Marca 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Escalas</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Escala 1</a></li>
                                <li><a className="dropdown-item" href="#!">Escala 2</a></li>
                                <li><a className="dropdown-item" href="#!">Escala 3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <CartWidget/> 
                        <FavouriteWidget/>
                        <LoginWidget/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default NavBar
