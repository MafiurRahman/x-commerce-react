import React from 'react';

import './product.css';

const Product = (props) => {
    console.log(props);
    const item = props.product;

    return (
        <div className='productContainer'>
            <div className="imgContainer">
                <img src={props.product.img} alt="" />
            </div>
            <div className="descContainer">
                <h3>{item.name}</h3>
                <p><small>by: {item.seller}</small></p>
                <h5>Price: ${item.price}</h5>
                <p><i>Only {item.stock} remaining in Stock. <span className='spanColor'>Order Now!!</span></i></p>
                <button className='addCartBtn' onClick={()=>props.handleProductAdd(item)}><i class="fa fa-shopping-cart" ></i>  Add to Cart</button>
            </div>  
        </div>
    );
};

export default Product;