import React from "react";
import "./css/Product.css";

function Product({btnid, title, image,showButton}) {
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>      
            </div>
            {showButton && <button id='btnProduct'>Comprar ahora</button>}
            <img src={image} alt="" />
        </div>
    )
}

export default Product;