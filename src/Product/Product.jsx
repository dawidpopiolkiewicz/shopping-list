import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Product.css';


class Product extends Component{ 
  
  constructor(props){
    super(props);
    this.productContent = props.productContent;
    this.productId = props.productId;

    this.handleRemoveNote = this.handleRemoveProduct.bind(this);
  }

  handleRemoveProduct(id){
    this.props.removeProduct(id);

  }

  render(){
    return(
      <div className="product fade-in">

        <p className="productContent">{this.productContent}</p>
              <span className="closebtn" onClick={() => this.handleRemoveProduct(this.productId)}>
      &times;
      </span>
      </div>
    );
  }
}

Product.propTypes = {
  productContent: PropTypes.string
}

export default Product;