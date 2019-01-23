import React, {
    Component
} from 'react';

import './ProductForm.css';


class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProductContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    handleUserInput(e) {
        this.setState({
            newProductContent: e.target.value,
        })
    }

    addProduct() {

        this.props.addProduct(this.state.newProductContent);

        this.setState({
            newProductContent: '',
        })

    }
    render() {
        return ( <
            div className = "formWrapper" >
            <
            input className = "productInput"
            placeholder = "Nazwa produktu"
            value = {
                this.state.newProductContent
            }
            onChange = {
                this.handleUserInput
            }
            /> <
            button className = "productButton"
            onClick = {
                this.addProduct
            } > Dodaj produkt < /button> <
            /div>
        )
    }

}

export default ProductForm;
