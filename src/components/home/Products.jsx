import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    return (
        <div className="flex gap-2">
           <SingleProduct/>
           <SingleProduct/>
           <SingleProduct/>
        </div>
    );
};

export default Products;