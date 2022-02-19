import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    //const fisrt20 = fakeData.slice(0,20);
    //const [products, setProducts] = useState(fisrt20);
    const [products] = useState(fakeData);
    const newProducts= products.slice(0,2);
    return (
        <div>
            
            <ul>
                {
                    newProducts.map(prod=><Product product={prod}></Product>)
                }
            </ul>
        </div>
    );
};

export default Shop;