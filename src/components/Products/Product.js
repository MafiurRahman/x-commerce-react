import React from 'react';
import './product.css';

const Product = (props) => {
    console.log(props);
    return (
        <div className='productContainer'>
            <img src={props.product.img} alt="" />
            <h3>{props.product.name}</h3>
            <h5>{props.product.price}</h5>
        </div>
    );
};

export default Product;