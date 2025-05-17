import React from "react";

import "../Styles/ListProducts.css";
import Product from "./Product";

import {products} from "../Utils/data.js"

const ListProducts = ({ addToCart }) => {
    return (
        <div className="containProducts">
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ListProducts;
