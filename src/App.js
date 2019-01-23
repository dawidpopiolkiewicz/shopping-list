import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Product from './Product/Product';
import ProductForm from './ProductForm/ProductForm';
import './App.css';
import {DB_CONFIG} from './Config/config';

class App extends Component {

  constructor(props){
    super(props);
    this.addProduct = this.addProduct.bind(this); 
    this.removeProduct = this.removeProduct.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('products');


    this.state = {
      products: [ ],
    }
  }

  componentWillMount() {
    const previousProducts = this.state.products;

    this.database.on('child_added', snap => {
      previousProducts.push({
        id: snap.key,
        productContent: snap.val().productContent,
      })
      this.setState({
        products: previousProducts
      })
    } )

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousProducts.length; i++) {
        if(previousProducts[i].id === snap.key){
          previousProducts.splice(i, 1);
        }
        this.setState({
        products: previousProducts
      })

      }
    })
  }

  addProduct(product){
    this.database.push().set({productContent: product});
   
  }
  removeProduct(productId) {
    this.database.child(productId).remove();

  }

  render() {
    return (
      <div className="productWrapper">
        <div className="productHeader">
          <div className="heading">Lista zakupów</div>
        </div>
        <div className="productBody">
          {
            this.state.products.map((product) => {
              return (
                <Product
                  productContent={product.productContent}
                  productId={product.id}
                  key = {product.id}
                  removeProduct = {this.removeProduct}
                  />
              )
            })            
          }
          
        </div>
        <div className="productFooter">
          <ProductForm addProduct={this.addProduct}/>
        </div>
        
      </div>
    );
  }
}



export default App;
