import React from "react";
import "../../Styles/CartStyles/ImageAndName.css";

const ImageAndName = ({product}) => {
    return (
        <div className="imagenYNombre">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
        </div>
    );
};

export default ImageAndName;
