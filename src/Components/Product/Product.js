import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { strDrinkThumb, strDrink, strInstructionsIT } = props.product;
    return (
        <div className="product-container">
            <div>
                <img width="300px" src={strDrinkThumb} alt="" />
            </div>
            <div>
                <h2>{strDrink}</h2>
                <p>{strInstructionsIT.slice(0, 100)}</p>
                <button className='btn btn-primary' onClick={() => props.adToCart(props.product)}><i class="fas fa-shopping-cart"></i> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;