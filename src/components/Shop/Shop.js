import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

import './Shop.css';

const Shop = () => {
    //const fisrt20 = fakeData.slice(0,20);
    //const [products, setProducts] = useState(fisrt20);
    const [products , setProducts] = useState(fakeData);
    const newProducts= products.slice(0,80);
    const [cart, setCart]= useState([]);
    var [prc, setPrc]=useState();

    const handleProductAdd =(product)=> { 
        console.log('added');
        const newCart=[...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'>
            <div className="itemContainer">
            {
                newProducts.map(prod=><Product product={prod} handleProductAdd={handleProductAdd}></Product>)
            }
            </div>
            <div className="cartContainer">        
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;