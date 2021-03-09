/* eslint-disable no-unused-vars */
import React from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { useState, useEffect } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import happyImage from '../../images/giphy.gif';
import './Review.css'
 
const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder,setPlaceOrder]=useState(false)
    const addPlaceOrder=() =>{
         setCart([]);
         setPlaceOrder(true);
         processOrder();
         


    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const countProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(countProduct);
    }, []);

     let thankyou;
    if(placeOrder){
        thankyou=<img src={happyImage} alt=""/>
        
    }

    return (
        <div className="shop-container">
         <div className="img-container">
       {
           thankyou
       }
            </div>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                }

            </div>
           
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={addPlaceOrder} className="confirm-order totalCount">Place Order</button>

            </div>

        </div>
    );
};


export default Review;