import "../Styles/Product.css";

const Product = ({ product, addToCart }) => {
    return (
        <div className="productCard">
            <div className="productInfo">
                <h2>{product.name}</h2>
            </div>

            <div className="productImage">
                <img src={product.image} alt={product.name}/>
            </div>

            <div className="productDetails">
                <p>${product.price}</p>
                <span>{product.description}</span>
            </div>

            <div className="product-button">
                <button onClick={()=>addToCart(product)}>Agregar</button>
            </div>
        </div>
    );
};

export default Product;
