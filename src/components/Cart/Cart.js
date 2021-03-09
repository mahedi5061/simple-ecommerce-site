import React from 'react';
import './Cart.css';

const Cart = (props) => {
     
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>(total+pd.price*pd.quantity),0);
    
    let shipping =0;
    if(total>=15 && total<=35){
        shipping=4.99;
    }
    else if(total>35){
        shipping=0.00;
    }
    else if(total>0 && total<15){
        shipping=12.99;
    }
    let tax=(total*0.1).toFixed(2);
    let totalPrice=(total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
        <div className="summery-container">
            <h2 className="order-summery">Order Summery:</h2>
            <p className="item-summery">Items order: {cart.length}</p>
            <p>Shipping Fee: ${shipping} </p>
            <h4>Product Price: ${total.toFixed(2)}</h4>
            <h4>Tax + VAT: ${tax}</h4>   
        </div>
        <h4 className='totalCount'>Total Price: ${totalPrice}</h4>
        <button className="confirm-order totalCount">Review Order</button>
       </div>
        
    );
};

export default Cart;