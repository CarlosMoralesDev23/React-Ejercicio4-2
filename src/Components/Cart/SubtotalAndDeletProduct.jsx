import React from "react";
import "../../Styles/CartStyles/SubtotalAndDeletProduct.css"

const SubtotalAndDeletProduct = ( { product, cart, removeProduct  } ) => {
    return (
        <div className="SubtotalAndDeletProduct">
            <span>SubTotal: xxx</span>

            <button onClick={() => removeProduct(product)}>Eliminar</button>
        </div>
    );
};

export default SubtotalAndDeletProduct;
