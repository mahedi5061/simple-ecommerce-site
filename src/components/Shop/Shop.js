import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setproducts] = useState(first20);
    const [cart, setCart] = useState([]);
    const addEventHandler=(product)=>{
        console.log("added",product);
        const newCart=[...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product addEventHandler={addEventHandler} product={product}></Product>)
                }
            </div>
            <div className="car-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;