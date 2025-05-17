import React from "react";
import "../../Styles/CartStyles/Quantity.css"

const Quantity = ({product, incrementQuantity, decrementQuantity, removeProduct}) => {
    return (
        <div className="botonesMenosYMas">
            <button
                onClick={
                    product.quantity === 1
                        ? () => removeProduct(product)
                        : () => decrementQuantity(product)
                }
            >-</button>

            <span>{product.quantity}</span>

            <button onClick={() => incrementQuantity(product)}>+</button>
        </div>
    );
};

export default Quantity;