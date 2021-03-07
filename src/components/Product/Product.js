import React from 'react';
import '../Shop/Shop';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, price, seller, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-size">
                <h3 className="product-name"><Link to={`/product/${key}`}>{name}</Link> </h3>
                <br />
                <h4 className="product-common">By: {seller}</h4>

                <h3 className="product-common">${price}</h3>
                <h4 className="product-common">Available stock item: {stock}</h4>
                {props.showAddToCart && <button className="product-common btn" onClick={() => props.addEventHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                }


            </div>

        </div>
    );
};

export default Product;