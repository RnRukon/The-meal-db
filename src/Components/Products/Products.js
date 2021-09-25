import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartToProductName, setCartToProductName] = useState([])
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setProducts(data.drinks))
    }, [])

    const adToCart = (products) => {
        const newCartToProductName = [...cartToProductName, products]
        setCartToProductName(newCartToProductName)


    }
    return (
        <div className="products-container">
            <h3 className="product-header-title">Products</h3>
            <div className='products'>

                <div className="product">

                    {
                        products.map(product => <Product product={product} adToCart={adToCart}></Product>)
                    }
                </div>
                <div>
                    <Cart cartToProductName={cartToProductName}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;