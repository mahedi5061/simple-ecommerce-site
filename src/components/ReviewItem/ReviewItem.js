import React from 'react';
import '../Product/Product.css';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props)
      const {img,name,quantity,key} = props.product;
     
    
    return (
        <div className="productItem">
             <img src={img} alt=''/>
           <h2 className="product-name">{name}</h2>
           <p className="product-common">Quantity: {quantity.length}</p>
           <br></br>
           <button className="product-common btn" onClick={() =>props.removeProduct(key)}>Remove Order</button>
             
        </div>
    );
};

export default ReviewItem;