import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setproducts] = useState(first20);
    const [cart, setCart] = useState([]);
    const addEventHandler=(product)=>{
        const toBeAdded =product.key;
        const sameProduct=cart.find(pd=>pd.key===toBeAdded);
        let count =1;
        let newCart;
        if(sameProduct){
            count=sameProduct.quantity + 1;
            sameProduct.quantity=count;
            const others=cart.filter(pd=>pd.key!==toBeAdded);
            newCart=[...others,sameProduct];
        }
            else{
                sameProduct.quantity=1;
                newCart=[...cart,product];
            }
        }
        setCart(newCart);
        
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product showAddToCart={true} addEventHandler={addEventHandler} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;