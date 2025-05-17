import React from "react";
import "../../Styles/CartStyles/Total.css"

const Total = ({cart}) => {

    let Total = cart.reduce((Total, item)=> {
        return Total + item.subtotal

    }, 0 )
    console.log(Total)
    


    return (
        <div className="cartTotalEImport">
            <h2 className="cartTotal">Total:{Total}</h2>
        </div>
    );
};

export default Total;
