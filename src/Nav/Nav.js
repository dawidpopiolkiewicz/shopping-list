import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import firebase from "firebase";
import {DB_CONFIG} from "../Config/config";
import ProductListForm from "../ProductListForm/ProductListForm"
import ProductAddForm from "../ProductAddForm/ProductAddForm"
import '../Nav/Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('products');
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                            <Link to="/productAddForm">Dodaj produkt</Link>

                        </li>
                        <li>
                            <Link to="/productListForm">Lista produktów</Link>
                        </li>
                    </ul>
                    </nav>
                    <Route exact path="/" component={() => <ProductListForm db={this.db}/>}/>
                    <Route exact path="/productListForm" component={() => <ProductListForm db={this.db}/>}/>
                    <Route exact path="/productAddForm" component={() => <ProductAddForm db={this.db}/>}/>
                </div>
            </Router>
        );
    }
}

export default Nav;