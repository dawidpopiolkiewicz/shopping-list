import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Product.css';


class Product extends Component{ 
  
  constructor(props){
    super(props);
    this.productContent = props.productContent;
    this.productCount = props.productCount;


    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }


  handleRemoveProduct(id){
    this.props.removeProduct(id);

  }


  render(){
    return(
      <div className="product fade-in">
        <p className="productContent">{this.productContent}</p>
        <p className="">{this.productCount} szt</p>
      </div>
    )
  }
}

Product.propTypes = {
  productContent: PropTypes.string,
  productCount: PropTypes.number
}

export default Product;