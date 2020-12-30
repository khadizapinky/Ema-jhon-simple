import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const{img, name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product_right'>
               <h4 className='product-name'>{name}</h4>
               <br/>
              <p><small>by: {seller}</small></p>
              
               <p>${price}</p>
               <p><small>only {stock} left in order-soon</small></p>
               <button 
               className="main-button"
               onClick = {() => props.handleAddProduct(props.product)}
               
               ><FontAwesomeIcon icon={faShoppingCart}   />Add to cart</button>

               </div>
            </div>
            
       
    );
};

export default Product;