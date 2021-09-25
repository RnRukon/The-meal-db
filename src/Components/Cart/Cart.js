import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cartToProductName } = props;

    let productName = [];
    for (const name of cartToProductName) {
        productName.push(name.strDrink)

    }


    return (
        <div className="Cart">
            <div className='container'>
                <h3 className='order'>Order product</h3>
                <div className="order-container">
                    <h4 className="count">Count:{cartToProductName.length}</h4>
                    <ol>
                        {
                            productName.map(name => <CartName name={name}></CartName>)
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};



const CartName = (props) => {
    // console.log(props.name)
    return (
        <div>

            <li>Name:{props.name}</li>

        </div>
    )
}


export default Cart;