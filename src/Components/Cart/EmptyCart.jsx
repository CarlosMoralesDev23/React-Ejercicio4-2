import React from "react";
import "../../Styles/CartStyles/EmptyCart.css"

const EmptyCart = ({cart}) => {
    return (
        <div className="emptyCartContainer">
            <button className="vaciarCarrito">Vaciar Carrito</button>
        </div>
    );
};

export default EmptyCart;
