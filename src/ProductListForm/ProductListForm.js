import React, {
    Component
} from 'react';
import Product from '../Product/Product';
import './ProductListForm.css';


class ProductListForm extends Component {
constructor(props){
    super(props);
    this.db = this.props.db;
    this.state={
        products: []
    }
}

componentWillMount(){
    const productsList = this.state.products;
    this.db.on('child_added',snap =>{
        productsList.push({
            id: snap.key,
            productContent: snap.val().productContent,
            productCount: snap.val().productCount
        })
        this.setState({
            products: productsList
        })
    })
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
                  productCount={product.productCount}
                  />
              )
            })            
          }
          
        </div>

        
      </div>
    );
  }
}
export default ProductListForm;
