import React from "react";
import "./css/Product.css";

function Product({id, title, image, price, rating}) {
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>Comprar ahora</button>
        </div>
    )
}

export default Product;