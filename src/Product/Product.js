import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Product.css';


class Product extends Component{ 
  
  constructor(props){
    super(props);
    this.productContent = props.productContent;
    this.productCount = props.productCount;
  }

  render(){
    return(
      <div className="product fade-in">

        <p className="productContent">{this.productContent}</p>
        <p className="">{this.productCount}</p>
        <span className="closebtn" onClick={() => this.handleRemoveProduct(this.productId)}>
      &times;
      </span>
      </div>
    )
  }
}

Product.propTypes = {
  productContent: PropTypes.string,
  productCount: PropTypes.number
}

export default Product;