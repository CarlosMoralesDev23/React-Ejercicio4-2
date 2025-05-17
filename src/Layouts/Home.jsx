import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Cart from "../Components/Cart/Cart"
import ListProducts from "../Components/ListProducts";
import Footer from "../Components/Footer";

const Home = ({
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
}) => {
    return (
        <>
            <Header />
            <Nav />
            <Main />

            <Cart
                cart={cart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
            />
            
            <ListProducts addToCart={addToCart} />

            <Footer />
        </>
    );
};

export default Home;
