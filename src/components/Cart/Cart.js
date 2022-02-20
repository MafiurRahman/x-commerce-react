import React from 'react';
import './Cart.css';


const Cart = (props) => {
const cart=props.cart;
const total= (cart.reduce((total,allProduct)=>total+allProduct.price,0)).toFixed(2);

let shipping = 0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }

    const vat= (total/10).toFixed(2);


    const roundedTotal=(Number(total)+shipping+Number(vat)).toFixed(2);
  

    return (
        <div class='cart'>
            <div className='centerPack'>
            <i class="fa fa-shopping-cart myStyle" ></i>
            </div>
            <h2>Order Summary :</h2>
            <hr/>
            <h3>Item(s) in Cart : {cart.length}</h3>
            <h4>Net Price: {total}</h4>
            <h4>Shipping Cost: {shipping}</h4>
            <h4>Vat + Tax: {vat}</h4>
            <hr />
            <h3>Total Price (inc. vat + tax): {roundedTotal}</h3>
        </div>
    );
};

export default Cart;