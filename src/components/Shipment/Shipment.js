import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } =useForm();
    const [login,setLogin]=useContext(userContext)
    const onSubmit = data => console.log(data);
   
    return (
      
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
       
         
        <input name="name" defaultValue={login.name} ref={register({ required: true })} placeholder="Your Name"/>
        {errors.name && <span className="error">Name is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Your Address" />
        {errors.address && <span className="error">Address is required</span>}

        <input name="zipcode" ref={register({ required: true })} placeholder="Your Zip-code"/>
        {errors.zipcode && <span className="error">Zip-code is required</span>}

        <input name="phoneNumber" ref={register({ required: true })} placeholder="Your Phone Number"/>
        {errors.phoneNumber && <span className="error">Phone number is required</span>}

        <input name="email" defaultValue={login.email} ref={register({ required: true })} placeholder="Your Email"/>
        {errors.email && <span className="error">Email is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;