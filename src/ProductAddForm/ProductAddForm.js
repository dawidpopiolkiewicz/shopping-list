import React, {Component} from 'react';
import "./ProductAddForm.css";
class ProductAddForm extends Component{

    constructor(props) {
        super(props);
        this.db= props.db;
        this.state={
            productContent: '',
            productCount: ''
        };

        this.addProduct = this.addProduct.bind(this);
        this.setProductContent = this.setProductContent.bind(this);
        this.setProductCount = this.setProductCount.bind(this);
    }
   

    addProduct() {

        this.db.push().set({productContent: this.state.productContent, productCount: this.state.productCount});

        this.setState({
            productContent: '',
            productCount: ''
        })

    }

    setProductContent(e){
    this.setState({
        productContent: e.target.value,
    })
    }

    setProductCount(e){
    this.setState({
        productCount: e.target.value,
    })
    }

    render() {
        return ( 
            <div className="formWrapper">
            <input className = "productInput" placeholder = "Nazwa produktu" onChange={this.setProductContent} value = {
                this.state.productContent
            }/>
            <input className = "productCountInput" placeholder = "Ilość produktu" onChange={this.setProductCount} value = {
                this.state.productCount
            }/>

             <button className = "productButton" onClick = {this.addProduct}> Dodaj produkt < /button> <
            /div>
        )
    }

}
export default ProductAddForm;