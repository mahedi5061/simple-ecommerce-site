import React from 'react';
import fakeData from '../../fakeData';
import { useState,useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setproducts] = useState(first20);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
         const previousCart=productKey.map(existingKey =>{
             const product =fakeData.find(pd=>pd.key === existingKey);
             product.quantity=saveCart[existingKey];
             return product;
         })
         setCart(previousCart);
    }, [])
    const addEventHandler=(product)=>{
        const toBeAddedKey =product.key;
        const sameProduct=cart.find(pd=>pd.key===toBeAddedKey);
        let count =1;
        let newCart;
        if(sameProduct){
            count=sameProduct.quantity + 1;
            sameProduct.quantity=count;
            const others=cart.filter(pd=>pd.key!==toBeAddedKey);
            newCart=[...others,sameProduct];
        }
            else{
                product.quantity=1;
                newCart=[...cart,product];
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