


export const addToCart = (newProduct) => {
    // 1 - Para agregar productos al carrito, tengo que manadarle el producto a Cart.
    // 2 - Se lo mando con un onClick que contenga la funcion addToCart con el argumento product
    // 3 - La función evaluara con un find si ese producto ya se encontraba en el Cart.
    // 4 - Se evalua para no duplicarlo en Cart.
    // 5 - Con un map, hago un ternario , donde coincidan los productos (true) agrego con cantidad +1,
    // 6 - El else del ternario devuelve e producto mapeado que no cincide id,  product
    // 7 - SINO EXISTE en el cart agregar el newProduct

    const existProductInCart = cart.find(
        (product) => product.id === newProduct.id
    );

    if (existProductInCart) {
        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? {...product, quantity: product.quantity + 1, subtotal: (product.quantity + 1) * product.price}
                : product
        );
        setCart(upDateCart);
    } else {
        setCart([
            ...cart,
            {
                ...newProduct,
                quantity: 1,
                subtotal: newProduct.price,
            },
        ]);
    }
};
