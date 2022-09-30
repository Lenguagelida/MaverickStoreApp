import React from 'react'
import imgHeader from '../assets/logo/maverick logo 5.png'

const Header = () => {
    return (
            <header className="bg-light mt-5 py-5">
                <div className="container d-flex justify-content-center">
                    <img src={imgHeader} alt="logo" width="300"/>
                </div>
            </header>
    );
};

export default Header
