import React from "react";
import "../../Styles/CartStyles/Quantity.css"

const Quantity = ({product}) => {
    return (
        <div className="botonesMenosYMas">
            <button>-</button>

            <span>{product.quantity}</span>
            
            <button>+</button>
        </div>
    );
};

export default Quantity;
