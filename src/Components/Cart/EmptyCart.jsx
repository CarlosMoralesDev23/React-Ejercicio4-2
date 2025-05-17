import React from "react";
import "../../Styles/CartStyles/EmptyCart.css"

const EmptyCart = ({cart, emptyCart}) => {
    return (
        <div className="emptyCartContainer">
            <button className="vaciarCarrito" onClick={()=>emptyCart()}>Vaciar Carrito</button>
        </div>
    );
};

export default EmptyCart;
