import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>(total+pd.price),0);
    return (
        <div className="summery-container">
            <h2 className="order-summery">Order Summery:</h2>
            <p className="item-summery">Items order: {cart.length}</p>
            <h4>Total Price: {total}</h4>

        </div>
    );
};

export default Cart;