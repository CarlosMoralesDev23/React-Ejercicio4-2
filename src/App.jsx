import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

function App() {

    const [ cart, setCart ] = useState([])


    const addToCart = (product) => {

        setCart([...cart, { ...product, quantity: 1 }]);

    };
    const addToCart2 = (product) => {

        const existProductInCart = cart.find((product)=> product.id === product.id)

        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const incrementQuantity = ()=>{
        console.log("Increment Quantity")
    }

    const decrementQuantity = () => {
        console.log("Decrement Quantity");
    };
    
    const removeProduct = ()=>{
        console.log("Remove Product");
    }
    
    const emptyCart = ()=>{
        setCart([])
    }



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
