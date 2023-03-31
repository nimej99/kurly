import React from 'react';
import {Link} from 'react-router-dom';
import dummy from './kurly.json';
import './css/list.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-regular-svg-icons";

function ProductChild(props) {
  return (
    <>
    <h2 className='list_h2'>이 상품 어때요?</h2>
    <ul className='list'>
      {dummy.foods.map(product=>
        (
        
          <li key={product.filename}>
            <Link to='/ProductDetail2'>
              <img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt="이미지" />
            </Link>
            <img src={`${process.env.PUBLIC_URL}/images/cart.svg`} alt="카트" className='cart'/>
            <p>
              <Link to='/ProductDetail2'>
                {product.name}
              </Link>
            </p>
            <strong>  
              {product.price}원
            </strong>
            <span>
              <FontAwesomeIcon icon={faCommentDots} /> 후기 {product.review}
            </span> 
          </li>
        )
      )}
    </ul>
    </>
  );
}

export default ProductChild;