import React, { Fragment } from "react";
import "../../Styles/CartStyles/Cart.css";
import ImageAndName from "./ImageAndName";
import Quantity from "./Quantity";
import SubtotalAndDeletProduct from "./SubtotalAndDeletProduct";
import Total from "./Total";
import EmptyCart from "./EmptyCart";

const Cart = ({
    cart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
}) => {
    return (
        <div className="cartContainer">
            <div className="cartTitle">
                <h2>Cart</h2>
                {cart.length === 0 && <p>No hay productos agregados</p>}
            </div>

            {cart.map((product) => (
                <div key={product.id} className="cartItem">
                    <ImageAndName product={product} />

                    <h3>${product.price}</h3>

                    <Quantity
                        product={product}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeProduct={removeProduct}
                    />

                    <SubtotalAndDeletProduct
                        product={product}
                        cart={cart}
                        removeProduct={removeProduct}
                    />
                </div>
            ))}

            {cart.length > 0 && (
                <Fragment>
                    <Total cart={cart} />
                    <EmptyCart emptyCart={emptyCart} />
                </Fragment>
            )}
        </div>
    );
};

export default Cart;
