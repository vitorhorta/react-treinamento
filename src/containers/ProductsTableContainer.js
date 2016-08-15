import React, {Component} from 'react';
import ProductsTable from "../components/ProductsTable"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/index';

class ProductsTableContainer extends Component {
    constructor(props){
      super(props);
      this.props.fetchProducts();

    }

    render() {
        return (
            <ProductsTable products={this.props.products.products} />
        );
    }
}

function mapStateToProps(state) {
    return {
      products: state.products
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchProducts:fetchProducts}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ProductsTableContainer)
