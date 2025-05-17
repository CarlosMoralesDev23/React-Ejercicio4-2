import React from "react";
import "../../Styles/CartStyles/SubtotalAndDeletProduct.css"

const SubtotalAndDeletProduct = ( { product, cart, removeProduct  } ) => {
    return (
        <div className="SubtotalAndDeletProduct">
            <span>SubTotal: ${product.subtotal}</span>

            <button onClick={() => removeProduct(product)}>Eliminar</button>
        </div>
    );
};

export default SubtotalAndDeletProduct;
