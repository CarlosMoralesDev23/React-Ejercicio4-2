import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

import { addToCart } from "./Utils/Funciones/addToCart.js"

function App() {
    const [cart, setCart] = useState([]);



    const incrementQuantity = (newProduct) => {
        // 1 - Para aumentar la cantidad del producto, tengo que manadarle el producto a Cart.
        // 2 - Se lo mando con un onClick que contenga la funcion incrementQuantity con el argumento product
        // 5 - Con un map, hago un ternario , donde coincidan los productos (true) agrego con cantidad +1,
        // 6 - El else del ternario devuelve e producto mapeado que no cincide id,  product
        // 7 - SINO EXISTE en el cart agregar el newProduct

        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1, subtotal : (product.quantity +1) * product.price }
                : product
        );
        setCart(upDateCart);

    };

    const decrementQuantity = (newProduct) => {
        // 1 - Para aumentar la cantidad del producto, tengo que manadarle el producto a Cart.
        // 2 - Se lo mando con un onClick que contenga la funcion incrementQuantity con el argumento product
        // 5 - Con un map, hago un ternario , donde coincidan los productos (true) agrego con cantidad +1,
        // 6 - El else del ternario devuelve e producto mapeado que no cincide id,  product
        // 7 - SINO EXISTE en el cart agregar el newProduct

        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? { ...product, quantity: product.quantity - 1, subtotal : (product.quantity -1) * product.price }
                : product
        );
        setCart(upDateCart);
    };


    
    const removeProduct = (inCartProduct) => {
        const upDateCart = cart.filter((product) =>
            product.id !== inCartProduct.id
                ? { ...product}
                : null
        );
        setCart(upDateCart);
    };

    
    const emptyCart = () => {
        setCart([]);
    };

    return (
        <>
            <Home
                cart={cart}
                addToCart={addToCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
            />
        </>
    );
}

export default App;
