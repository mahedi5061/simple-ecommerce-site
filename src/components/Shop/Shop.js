import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first20=fakeData.slice(0,20);
const [products, setproducts] = useState(first20);
    return (
        <div className="shop-container">
           <div className="product-container">
                {
                    products.map(product=><Product product={product}></Product>)
                }
           </div>
           <div className="car-container">
               <h3>This is a Shopping Cart</h3>
           </div>
        </div>
    );
};

export default Shop;