import React from "react";
import "./ProductAddedToCart.scss";


function ProductAddedToCart() {
    return (
        <div className="product_added_to_card">
            <span className="title">Product Added to your cart</span>
            <div className="product_card">
                <img className="product" src="./phone.svg"  alt="product"/>
                <span className="card_content">
                    <div className="card_header">
                        <img src="./blue_star.svg" alt="svg"/>
                        <span className="open_box">
                            Open Box
                        </span>
                    </div>

                    <span className="card_description">
                        <span className="product_name">Galaxy Tab A7</span>
                        <span className="product_properties">128 GB - Black - Excellent</span>
                        <span className="product_price">USD $250.00</span>
                    </span>
                </span>

            </div>
            <div className="product_cart_buttons">
                <a href="/" className="continue_shopping">Continue Shopping</a>
                <a href="/view_cart" className="view_cart">View Cart</a>
            </div>
        </div>
    )
}
export default ProductAddedToCart;