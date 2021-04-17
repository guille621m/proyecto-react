import React from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {
    return <>
    <CartWidget />
    
    <h1>Tienda de Guitarras</h1>

    <ul>
        <li>Home</li>
        <li>Catalogo</li>
        <li>Carrito</li>
    </ul>
        
    </>;
   }

export default NavBar;
   